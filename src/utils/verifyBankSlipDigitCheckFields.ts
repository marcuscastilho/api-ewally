import { ContentError } from "../responses/errors/ContentError";
import { topTen } from "./topTen";

const verifyBankSlipDigitCheckFields = (field) => {
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
};

export { verifyBankSlipDigitCheckFields };
