class Color {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const Summercolors = [new Color("main", "#000000")];

const Wintercolors = [];

exports.getThemeFromDate = (BeginSummerDate, BeginWinterDate) => {
  const Today = new Date();
  const SummerStartDate = new Date(BeginSummerDate);
  const WinterStartDate = new Date(BeginWinterDate);

  if (!isNaN(SummerStartDate) && !isNaN(WinterStartDate)) {
    SummerStartDate.setFullYear(Today.getFullYear());
    WinterStartDate.setFullYear(Today.getFullYear());

    if (Today >= SummerStartDate && Today < WinterStartDate) {
      // return class summer

      return "Summer";
    } else {
      // return class winter

      return "Winter";
    }
    //     // theme = require("./src/index")
  }

  return "Format invalide";
};

// module.exports = getThemeFromDate;
exports.Summercolors = Summercolors;
exports.Wintercolors = Wintercolors;
