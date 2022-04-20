import { topTen } from "../../src/utils/topTen";

describe("topTen", () => {
  it("find the top decimal", () => {
    const number_top_ten = topTen(18)

    expect(number_top_ten).toBe(20)
  });
});
