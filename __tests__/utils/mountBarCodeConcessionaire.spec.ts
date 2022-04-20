import { mountBarCodeConcessionaire } from "../../src/utils/mountBarCodeConcessionaire";

describe("mountBarCodeConcessionaire", () => {
  it("mounting the barcode on the dealership standard", () => {
    const bar_code = mountBarCodeConcessionaire({
      field_1: { group: '83670000002', check_digit: '6' },
      field_2: { group: '93480051300', check_digit: '4' },
      field_3: { group: '04451081981', check_digit: '4' },
      field_4: { group: '90013811101', check_digit: '9' }
    })

    expect(bar_code).toBe('83670000002934800513000445108198190013811101')
  });
});
