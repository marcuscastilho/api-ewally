import { ContentError } from "../responses/errors/ContentError";

function module10(check_digit: string, value: string) {
  const figures = Object.values(value).join().split("");
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

  result = result % 10;

  let possible_check_digit = 10 - result;

  if (result == 0) {
    possible_check_digit = 0;
  }

  if (possible_check_digit != Number(check_digit)) {
    throw new ContentError({
      tag: "digito verificador",
      message: "Digito verificador inválido",
      solution: "Verficar o código do boleto informado",
    });
  }
}

function module11(check_digit: string, value: string) {
  const figures = Object.values(value).join().split("");
  const figures_reverse = figures.reverse();

  const minimum_weight = 2;
  const maximum_weight = 9;
  let current_weight = minimum_weight;
  let result = 0;

  for (const item of figures_reverse) {
    if (current_weight > maximum_weight) {
      current_weight = minimum_weight;
    }

    let multiplication_result = Number(item) * current_weight;

    result += multiplication_result;
    current_weight++;
  }

  result = result % 11;

  let possible_check_digit = 11 - result;

  if (result == 0 || result == 1) {
    possible_check_digit = 0;
  }

  if (result == 10) {
    possible_check_digit = 1;
  }

  if (possible_check_digit != Number(check_digit)) {
    throw new ContentError({
      tag: "digito verificador",
      message: "Digito verificador inválido",
      solution: "Verficar o código do boleto informado",
    });
  }
}

const verifyBankSlipConcessionaireDigitCheckFields = (
  field,
  actual_value_identification: string
) => {
  const { check_digit, ...values } = field;

  const module = {
    6: module10,
    7: module10,
    8: module11,
    9: module11,
  };

  module[actual_value_identification](check_digit, values);
};

export { verifyBankSlipConcessionaireDigitCheckFields };
