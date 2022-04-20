import { verifyBankSlipConcessionaireDigitCheckFields } from "../../src/utils/verifyBankSlipConcessionaireDigitCheckFields";

describe("verifyBankSlipConcessionaireDigitCheckFields", () => {
  it("checking the digits of the entered fields", () => {
    verifyBankSlipConcessionaireDigitCheckFields({ group: '83670000002', check_digit: '6' }, '7');

    expect(verifyBankSlipConcessionaireDigitCheckFields);
  });
});
