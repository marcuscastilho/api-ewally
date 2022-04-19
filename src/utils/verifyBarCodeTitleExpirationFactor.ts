import { formatDate } from "./formatDate";

const verifyBarCodeTitleExpirationFactor = (expiration_factor: number) => {
  let date_base = null;

  if (new Date() >= new Date("2025-02-22 00:00")) {
    date_base = new Date("2022-05-29 00:00");
  } else {
    date_base = new Date("1997-10-07 00:00");
  }
  const expiration_date = new Date(
    date_base.setDate(date_base.getDate() + expiration_factor)
  );

  return formatDate(expiration_date);
}

export { verifyBarCodeTitleExpirationFactor }