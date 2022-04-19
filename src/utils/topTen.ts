const topTen = (digit: number) => {
  function decimalAdjust(value: string) {
    let right_digit = value;

    if (value.length >= 2) {
      right_digit = value.substring(value.length - 1, value.length);
    }

    if (right_digit == "0") {
      return true;
    }

    return false;
  }

  let top_ten = digit;
  let is_top_ten = decimalAdjust(String(top_ten));

  while (!is_top_ten) {
    top_ten++;
    is_top_ten = decimalAdjust(String(top_ten));
  }

  return top_ten;
};

export { topTen };
