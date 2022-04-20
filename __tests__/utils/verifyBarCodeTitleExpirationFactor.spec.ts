import { verifyBarCodeTitleExpirationFactor } from "../../src/utils/verifyBarCodeTitleExpirationFactor";

describe("verifyBarCodeTitleExpirationFactor.spec", () => {
  it("checking and searching for the ticket expiration date", () => {
    const date_expiration_1 = verifyBarCodeTitleExpirationFactor(1000);
    const date_expiration_2 = verifyBarCodeTitleExpirationFactor(1001);
    const date_expiration_3 = verifyBarCodeTitleExpirationFactor(1667);
    const date_expiration_4 = verifyBarCodeTitleExpirationFactor(4789);
    const date_expiration_5 = verifyBarCodeTitleExpirationFactor(9999);

    expect(date_expiration_1).toBe("2000-07-03");
    expect(date_expiration_2).toBe("2000-07-04");
    expect(date_expiration_3).toBe("2002-05-01");
    expect(date_expiration_4).toBe("2010-11-17");
    expect(date_expiration_5).toBe("2025-02-21");
  });
});
