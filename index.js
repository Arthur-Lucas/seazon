const { Interval, DateTime } = require("luxon");
// const fs = require("fs");

// class Color {
//   constructor(name, code) {
//     this.name = name;
//     this.code = code;
//   }
// }

// const Summercolors = [
//   new Color("seazon-main-color", "#ebf5ee"),
//   new Color("seazon-second-color", "#283044"),
//   new Color("seazon-third-color", "#78A1BB"),
// ];

// const Wintercolors = [
//   new Color("seazon-main-color", "#FF9505"),
//   new Color("seazon-second-color", "#353531"),
//   new Color("seazon-third-color", "#EC4E20"),
// ];

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

// function addClassToCSSFile(colors) {
//   const cssFilePath = "./css/styles.css";
//   fs.readFile(cssFilePath, "utf8", (err, data) => {
//     data = "";
//     if (err) {
//       console.error("Error reading CSS file:", err);
//       return;
//     }
//     colors.forEach((color) => {
//       data += `.${color.name} { background-color: ${color.code} }\n`;
//     });
//     // Modify the CSS content by adding a new class

//     fs.writeFile(cssFilePath, data, "utf8", (err) => {
//       if (err) {
//         console.error("Error writing CSS file:", err);
//       }
//     });
//   });
// }

exports.getThemeFromDate = (BeginSummerDate, BeginWinterDate) => {
  const Today = DateTime.now();

  if (isValidFormat(BeginSummerDate) && isValidFormat(BeginWinterDate)) {
    var dayMatch = extractDayFromDate(BeginSummerDate);
    var montMatch = extractMonthFromDate(BeginSummerDate);

    const SummerStartDate = DateTime.fromObject({
      month: montMatch,
      day: dayMatch,
    });

    dayMatch = extractDayFromDate(BeginWinterDate);
    montMatch = extractMonthFromDate(BeginWinterDate);

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
      if (typeof process === "undefined") {
        const styleElement = document.createElement("style");

        const customCSS = `
        .seazon-main-color {
            background-color: #f0ead2;
          }
        .seazon-second-color {
          background-color: #adc178;
        }
        .seazon-third-color {
          background-color: #dde5b6;
        }
        `;
        styleElement.innerHTML = customCSS;
        document.head.appendChild(styleElement);
      }

      // addClassToCSSFile(Summercolors);
      return "Summercolors added to CSS";
    } else {
      if (typeof process === "undefined") {
        const styleElement = document.createElement("style");
        const customCSS = `
        .seazon-main-color {
            background-color: #ebf5ee;
          }
        .seazon-second-color {
          background-color: #283044;
        }
        .seazon-third-color {
          background-color: #78A1BB;
        }
        `;

        styleElement.innerHTML = customCSS;
        document.head.appendChild(styleElement);
      }
      // addClassToCSSFile(Wintercolors);
      return "Wintercolors added to CSS";
    }
  }

  return "Wrong format";
};
