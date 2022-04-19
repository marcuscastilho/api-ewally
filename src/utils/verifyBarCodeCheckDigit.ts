import { ContentError } from "../responses/errors/ContentError";

const verifyBarCodeCheckDigit = (barCode: string, check_digit: number) => {
  const figures = barCode.split("");
  figures.splice(4, 1);
  const figures_reverse = figures.reverse();

  const minimum_weight = 2;
  const maximum_weight = 9;
  let current_weight = minimum_weight;
  let result = 0;

  for (const item of figures_reverse) {
    if (current_weight > maximum_weight) {
      current_weight = minimum_weight;
    }
    result += Number(item) * current_weight;
    current_weight++;
  }

  let possible_check_digit = 11 - (result % 11);

  if (
    possible_check_digit == 0 ||
    possible_check_digit == 10 ||
    possible_check_digit == 11
  ) {
    possible_check_digit = 1;
  }

  if (possible_check_digit != check_digit) {
    throw new ContentError({
      tag: "digito verificador",
      message: "Digito verificador inválido",
      solution: "Verficar o código de barras informado",
    });
  }
};

export { verifyBarCodeCheckDigit };
