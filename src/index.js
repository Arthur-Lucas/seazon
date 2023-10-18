const { Interval, DateTime } = require("luxon");
// class Color {
//   constructor(name, code) {
//     this.name = name;
//     this.code = code;
//   }
// }

// const Summercolors = [];

// const Wintercolors = [];

function isValidFormat(input) {
  const dateFormatRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;

  return dateFormatRegex.test(input);
}

function extractDayFromDate(input) {
  const dayRegex = /(\d{2})\/\d{2}/;
  const match = dayRegex.exec(input);
  if (match) {
    return match[1];
  }
  return null;
}

function extractMonthFromDate(input) {
  const monthRegex = /\d{2}\/(\d{2})/;
  const match = monthRegex.exec(input);
  if (match) {
    return match[1];
  }
  return null;
}

exports.getThemeFromDate = (BeginSummerDate, BeginWinterDate) => {
  const Today = DateTime.now();

  if (isValidFormat(BeginSummerDate) && isValidFormat(BeginWinterDate)) {
    var dayMatch = extractDayFromDate(BeginSummerDate);
    var montMatch = extractMonthFromDate(BeginSummerDate);

    const SummerStartDate = DateTime.fromObject({
      month: montMatch,
      day: dayMatch,
    });

    var dayMatch = extractDayFromDate(BeginWinterDate);
    var montMatch = extractMonthFromDate(BeginWinterDate);

    const WinterStartDate = DateTime.fromObject({
      month: montMatch,
      day: dayMatch,
    });

    const intervalBeginSummer = Interval.fromDateTimes(SummerStartDate, Today);
    const intervalBeginWinter = Interval.fromDateTimes(WinterStartDate, Today);

    if (
      intervalBeginSummer.invalid == null &&
      intervalBeginWinter.invalid != null
    ) {
      return "Summer";
    } else {
      return "Winter";
    }
  }

  return "wrong";
};

// theme = require("./src/index")
