import { ContentError } from "../responses/errors/ContentError";
import { formatDate } from "./formatDate";
import { mountBarCode } from "./mountBarCode";
import { topTen } from "./topTen";

const verifyBarCodeTitle = (bank_slip_code: string) => {
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

  verifyDigitCheckFields(bank_slip_composition.field_1);
  verifyDigitCheckFields(bank_slip_composition.field_2);
  verifyDigitCheckFields(bank_slip_composition.field_3);

  function verifyDigitCheckFields(field) {
    const { check_digit, ...values } = field;

    const figures = Object.values(values).join().replace(/,/g, "").split("");
    const figures_reverse = figures.reverse();

    const minimum_weight = 1;
    const maximum_weight = 2;
    let current_weight = maximum_weight;
    let result = 0;

    for (const item of figures_reverse) {
      if (current_weight > maximum_weight) {
        current_weight = minimum_weight;
      }

      let multiplication_result = Number(item) * current_weight;
      if (multiplication_result > 9) {
        const multiplication_result_split = String(multiplication_result).split(
          ""
        );
        multiplication_result =
          Number(multiplication_result_split[0]) +
          Number(multiplication_result_split[1]);
      }
      result += multiplication_result;
      current_weight++;
    }

    const top_ten = topTen(result);

    let possible_check_digit = top_ten - result;

    if (possible_check_digit == 10) {
      possible_check_digit = 0;
    }

    if (possible_check_digit != check_digit) {
      throw new ContentError({
        tag: "digito verificador",
        message: "Digito verificador inválido",
        solution: "Verficar o código do boleto informado",
      });
    }
  }

  const bar_code =  mountBarCode(bank_slip_composition)

  console.log('bank_slip_code', bank_slip_code)
  console.log('bar_code', bar_code)

  function verifyDigitCheckBarCode(fiedl){

  }

};

// const barcode_composition = {
//   banking_code_clearing_house: bank_slip_composition.field_1_a,
//   currency_code: bank_slip_composition.field_1_b,
//   check_digit: barCode.substring(4, 5),
//   expiration_factor: barCode.substring(5, 9),
//   value: barCode.substring(9, 19),
//   free_field: barCode.substring(9, 44),
// };

//   verifyCheckDigit(barCode, Number(barcode_composition.check_digit));
//   const expirationDate = verifyExpirationFactor(
//     Number(barcode_composition.expiration_factor)
//   );

//   const bank_slip_params = {
//     barCode,
//     amount: parseFloat(
//       barcode_composition.value.substring(0, 8) +
//         "." +
//         barcode_composition.value.substring(8, 10)
//     ),
//     expirationDate,
//   };

//   return bank_slip_params;
// };

// function verifyCheckDigit(barCode: string, check_digit: number) {
//   const figures = barCode.split("");
//   figures.splice(4, 1);
//   const figures_reverse = figures.reverse();

//   const minimum_weight = 2;
//   const maximum_weight = 9;
//   let current_weight = minimum_weight;
//   let result = 0;

//   for (const item of figures_reverse) {
//     if (current_weight > maximum_weight) {
//       current_weight = minimum_weight;
//     }
//     result += Number(item) * current_weight;
//     current_weight++;
//   }

//   let possible_check_digit = 11 - (result % 11);

//   if (
//     possible_check_digit == 0 ||
//     possible_check_digit == 10 ||
//     possible_check_digit == 11
//   ) {
//     possible_check_digit = 1;
//   }

//   if (possible_check_digit != check_digit) {
//     throw new ContentError({
//       tag: "digito verificador",
//       message: "Digito verificador inválido",
//       solution: "Verficar o código de barras informado",
//     });
//   }
// }

// function verifyExpirationFactor(expiration_factor: number) {
//   let date_base = null;

//   if (new Date() >= new Date("2025-02-22 00:00")) {
//     date_base = new Date("2022-05-29 00:00");
//   } else {
//     date_base = new Date("1997-10-07 00:00");
//   }
//   const expiration_date = new Date(
//     date_base.setDate(date_base.getDate() + expiration_factor)
//   );

//   return formatDate(expiration_date);
// }

export { verifyBarCodeTitle };
