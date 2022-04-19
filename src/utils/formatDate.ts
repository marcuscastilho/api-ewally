const formatDate = (date: Date) => {
  let date_original = new Date(date),
    month = "" + (date_original.getMonth() + 1),
    day = "" + date_original.getDate(),
    year = date_original.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export { formatDate };
