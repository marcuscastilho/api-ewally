import { verifyBarCodeTitleCheckDigit } from "../../src/utils/verifyBarCodeTitleCheckDigit";

describe("verifyBarCodeConcessionaireCheckDigit", () => {
  it("checking barcode key digit", () => {
    verifyBarCodeTitleCheckDigit('21299758700000020000001121100012100447561740', 9);

    expect(verifyBarCodeTitleCheckDigit);
  });
});
