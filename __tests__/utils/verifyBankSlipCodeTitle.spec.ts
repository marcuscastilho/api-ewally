import { verifyBankSlipCodeTitle } from "../../src/utils/verifyBankSlipCodeTitle";

describe("verifyBankSlipCodeTitle", () => {
  it("checking the bank slip title", () => {
    const bank_slip_params = verifyBankSlipCodeTitle(
      "21290001192110001210904475617405975870000002000"
    );

    expect(bank_slip_params.barCode).toBe(
      "21299758700000020000001121100012100447561740"
    );
    expect(bank_slip_params.amount).toBe(20);
    expect(bank_slip_params.expirationDate).toBe("2018-07-16");
  });
});
