import { mountBarCodeTitle } from "../../src/utils/mountBarCodeTitle";

describe("mountBarCodeTitle", () => {
  it("assembling the barcode on the title pattern", () => {
    const bar_code = mountBarCodeTitle({
      field_1: { group_a: '212', group_b: '9', group_c: '00011', check_digit: '9' },
      field_2: { group_d: '2110001210', check_digit: '9' },
      field_3: { group_e: '0447561740', check_digit: '5' },
      field_4: { group_k: '9' },
      field_5: { group_u: '7587', group_v: '0000002000' }
    })

    expect(bar_code).toBe('21299758700000020000001121100012100447561740')
  });
});
