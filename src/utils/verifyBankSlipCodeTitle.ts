import { mountBarCodeTitle } from "./mountBarCodeTitle";
import { verifyBankSlipTitleDigitCheckFields } from "./verifyBankSlipTitleDigitCheckFields";
import { verifyBarCodeTitleCheckDigit } from "./verifyBarCodeTitleCheckDigit";
import { verifyBarCodeTitleExpirationFactor } from "./verifyBarCodeTitleExpirationFactor";

const verifyBankSlipCodeTitle = (bank_slip_code: string) => {
  const bank_slip_composition = {
    field_1: {
      group_a: bank_slip_code.substring(0, 3),
      group_b: bank_slip_code.substring(3, 4),
      group_c: bank_slip_code.substring(4, 9),
      check_digit: bank_slip_code.substring(9, 10),
    },
    field_2: {
      group_d: bank_slip_code.substring(10, 20),
      check_digit: bank_slip_code.substring(20, 21),
    },
    field_3: {
      group_e: bank_slip_code.substring(21, 31),
      check_digit: bank_slip_code.substring(31, 32),
    },
    field_4: {
      group_k: bank_slip_code.substring(32, 33),
    },
    field_5: {
      group_u: bank_slip_code.substring(33, 37),
      group_v: bank_slip_code.substring(37, 47),
    },
  };


  verifyBankSlipTitleDigitCheckFields(bank_slip_composition.field_1);
  verifyBankSlipTitleDigitCheckFields(bank_slip_composition.field_2);
  verifyBankSlipTitleDigitCheckFields(bank_slip_composition.field_3);

  const bar_code = mountBarCodeTitle(bank_slip_composition);

  const bar_code_composition = {
    banking_code_clearing_house: bar_code.substring(0, 3),
    currency_code: bar_code.substring(3, 4),
    check_digit: bar_code.substring(4, 5),
    expiration_factor: bar_code.substring(5, 9),
    value: bar_code.substring(9, 19),
    free_field: bar_code.substring(9, 44),
  };

  verifyBarCodeTitleCheckDigit(bar_code, Number(bar_code_composition.check_digit));
  const expiration_date = verifyBarCodeTitleExpirationFactor(
    Number(bar_code_composition.expiration_factor)
  );

  const bank_slip_params = {
    barCode: bar_code,
    amount: parseFloat(
      bar_code_composition.value.substring(0, 8) +
        "." +
        bar_code_composition.value.substring(8, 10)
    ),
    expirationDate: expiration_date,
  };

  return bank_slip_params;
};

export { verifyBankSlipCodeTitle };
