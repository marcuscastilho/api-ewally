import { verifyBankSlipCodeConcessionaire } from "../../src/utils/verifyBankSlipCodeConcessionaire";

describe("verifyBankSlipCodeConcessionaire", () => {
  it("checking the dealership's bank slip", () => {
    const bank_slip_params = verifyBankSlipCodeConcessionaire('836700000026934800513004044510819814900138111019')

    expect(bank_slip_params.barCode).toBe('83670000002934800513000445108198190013811101')
    expect(bank_slip_params.amount).toBe(293.48)
    expect(bank_slip_params.expirationDate).toBe(null)
  });
});
