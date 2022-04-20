import { verifyBankSlipTitleDigitCheckFields } from "../../src/utils/verifyBankSlipTitleDigitCheckFields";

describe("verifyBankSlipTitleDigitCheckFields", () => {
  it("checking the digits of the entered fields", () => {
    verifyBankSlipTitleDigitCheckFields({ group_a: '212', group_b: '9', group_c: '00011', check_digit: '9' });

    expect(verifyBankSlipTitleDigitCheckFields);
  });
});
