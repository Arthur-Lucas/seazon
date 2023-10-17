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

  if (BeginSummerDate === new Date() && BeginWinterDate === new Date()) {
    //...
    // if summer : return Summer colors
    // else : return Wintercolors
  }

  return "echec";
};

// module.exports = getThemeFromDate;
exports.Summercolors = Summercolors;
exports.Wintercolors = Wintercolors;
