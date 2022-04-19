import { verifyBankSlipConcessionaireDigitCheckFields } from "./verifyBankSlipConcessionaireDigitCheckFields";

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

  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_1);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_2);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_3);
  verifyBankSlipConcessionaireDigitCheckFields(bank_slip_composition.field_4);

  // const bar_code_composition = {
  //   product_identification: bank_slip_code.substring(0, 1),
  //   segment_idenfitication: bank_slip_code.substring(1, 2),
  //   actual_value_identification: bank_slip_code.substring(2, 3),
  //   check_digit: bank_slip_code.substring(3, 4),
  //   value: bank_slip_code.substring(4, 15),
  //   company_identification: bank_slip_code.substring(15, 19),
  //   free_field_without_cnpj: bank_slip_code.substring(19, 44),
  //   cnpj_mf: bank_slip_code.substring(15, 23),
  //   free_field_with_cnpj: bank_slip_code.substring(23, 44),
  // };
};

export { verifyBankSlipCodeConcessionaire };
