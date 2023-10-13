const date = (curr?: Date) => {
  const today = new Date(curr || Date.now());
  const year = today.getFullYear();
  let month: number | string = today.getMonth() + 1; // month is zero-based
  let day: number | string = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  if (day < 10) { day = '0' + day }
  if (month < 10) { month = '0' + month }

  return `${year}-${month}-${day} ${hours}:${minutes}`
}
export default date