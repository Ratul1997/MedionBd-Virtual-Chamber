const convertDateToString = date => {
  date = new Date(date);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate();

  const newDate = day + '/' + month + '/' + year;
  return newDate;
};

const convertDate = {
  convertDateToString,
};
export default convertDate;
