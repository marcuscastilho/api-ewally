import { mountBarCodeConcessionaire } from "./mountBarCodeConcessionaire";
import { verifyBankSlipConcessionaireDigitCheckFields } from "./verifyBankSlipConcessionaireDigitCheckFields";
import { verifyBarCodeConcessionaireCheckDigit } from "./verifyBarCodeConcessionaireCheckDigit";
import { verifyBarCodeConcessionaireExpirationFactor } from "./verifyBarCodeConcessionaireExpirationFactor";

const verifyBankSlipCodeConcessionaire = (bank_slip_code: string) => {
  const bank_slip_composition = {
    field_1: {
      group: bank_slip_code.substring(0, 11),
      check_digit: bank_slip_code.substring(11, 12),
    },
    field_2: {
      group: bank_slip_code.substring(12, 23),
      check_digit: bank_slip_code.substring(23, 24),
    },
    field_3: {
      group: bank_slip_code.substring(24, 35),
      check_digit: bank_slip_code.substring(35, 36),
    },
    field_4: {
      group: bank_slip_code.substring(36, 47),
      check_digit: bank_slip_code.substring(47, 48),
    },
  };
  console.log('bank_slip_composition', bank_slip_composition)

  const actual_value_identification = bank_slip_code.substring(2, 3)

  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_1, actual_value_identification);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_2, actual_value_identification);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_3, actual_value_identification);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_4, actual_value_identification);

  const bar_code = mountBarCodeConcessionaire(bank_slip_composition);
  let bar_code_composition = null

  // Verificando a utilização do Segmento 9
  if(bar_code[1] == '9'){
    bar_code_composition = {
      product_identification: bar_code.substring(0, 1),
      segment_idenfitication: bar_code.substring(1, 2),
      actual_value_identification: bar_code.substring(2, 3),
      check_digit: bar_code.substring(3, 4),
      value: bar_code.substring(4, 15),
      company_identification: bar_code.substring(15, 19),
      free_field_without_cnpj: bar_code.substring(19, 44),
      expiration_factor:  bar_code.substring(19, 27)
    };
  } else {
    bar_code_composition = {
      product_identification: bar_code.substring(0, 1),
      segment_idenfitication: bar_code.substring(1, 2),
      actual_value_identification: bar_code.substring(2, 3),
      check_digit: bar_code.substring(3, 4),
      value: bar_code.substring(4, 15),
      company_identification: bar_code.substring(15, 23),
      free_field_without_cnpj: bar_code.substring(23, 44),
      expiration_factor:  bar_code.substring(23, 31)
    };
  }
  

  verifyBarCodeConcessionaireCheckDigit(bar_code, Number(bar_code_composition.check_digit), actual_value_identification)
  const expiration_date = verifyBarCodeConcessionaireExpirationFactor(
    bar_code_composition.expiration_factor
  );


  const bank_slip_params = {
    barCode: bar_code,
    amount:  parseFloat(
      bar_code_composition.value.substring(0, 9) +
        "." +
        bar_code_composition.value.substring(9, 11)
    ),
    expirationDate: expiration_date,
  };

  return bank_slip_params;
};


export { verifyBankSlipCodeConcessionaire };
