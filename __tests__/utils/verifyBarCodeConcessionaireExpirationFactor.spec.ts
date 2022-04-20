import { verifyBarCodeConcessionaireExpirationFactor } from "../../src/utils/verifyBarCodeConcessionaireExpirationFactor";

describe("verifyBarCodeConcessionaireExpirationFactor.spec", () => {
  it("checking and searching for the ticket expiration date", () => {
    const date_expiration = verifyBarCodeConcessionaireExpirationFactor('20220401');
    const date_expirationfev = verifyBarCodeConcessionaireExpirationFactor('20220328');
    const date_expirationjan = verifyBarCodeConcessionaireExpirationFactor('20210101');
    const date_expirationdez = verifyBarCodeConcessionaireExpirationFactor('20221231');

    expect(date_expiration).toBe('2022-04-01');
    expect(date_expirationfev).toBe('2022-03-28');
    expect(date_expirationjan).toBe('2021-01-01');
    expect(date_expirationdez).toBe('2022-12-31');
  });
});
