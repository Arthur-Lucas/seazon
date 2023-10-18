Theme = require("../index");

describe("getThemeFromDate", () => {
  it("should return color from date theme", () => {
    // Date must be of type "MM/dd"
    const result = Theme.getThemeFromDate("20/06", "22/12");
    expect(typeof result).toBe("object");
  });
});
