import { formatDate } from "./formatDate";

const verifyBarCodeConcessionaireExpirationFactor = (
  expiration_factor: string
) => {
  const year = expiration_factor.substring(0, 4);
  const month = expiration_factor.substring(4, 6);
  const day = expiration_factor.substring(6, 8);
  const date = `${year}-${month}-${day}`;

  if (year < "2000" || year > "2030") {
    return null;
  }

  const expiration_date = new Date(date);

  return formatDate(expiration_date);
};

export { verifyBarCodeConcessionaireExpirationFactor };
