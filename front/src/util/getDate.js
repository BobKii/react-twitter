export const getDate = (time) => {
  // створення об'єкта Date на основі UNIX-часу
  const date = new Date(time);

  // Отримання дати та часу в потрібному форматі
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Формування результату в форматі "dd.mm hh:mm" і виведення

  const formatteDate = `${day}.${month} ${hours}:${minutes}`;

  return formatteDate;
};
