const currentDate = new Date();

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

const month = monthsOfYear[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedWeekDay = `${dayOfWeek},`;
      document.getElementById("week-day").innerHTML = formattedWeekDay;

const formattedDate = `${month} ${day}, ${year}`;
      document.getElementById("current-date").innerHTML = formattedDate;
      