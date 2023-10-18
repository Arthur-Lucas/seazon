Theme = require("../src/index");

describe("getThemeFromDate", () => {
  it("should return color from date theme", () => {
    // Date must be of type "MM/dd"
    const result = Theme.getThemeFromDate("06/20", "12/22");
    expect(typeof result).toBe("object");
  });
});
