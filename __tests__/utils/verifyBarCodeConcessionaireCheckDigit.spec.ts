import { verifyBarCodeConcessionaireCheckDigit } from "../../src/utils/verifyBarCodeConcessionaireCheckDigit";

describe("verifyBarCodeConcessionaireCheckDigit", () => {
  it("checking barcode key digit", () => {
    verifyBarCodeConcessionaireCheckDigit('83670000002934800513000445108198190013811101', 7, '7');

    expect(verifyBarCodeConcessionaireCheckDigit);
  });
});
