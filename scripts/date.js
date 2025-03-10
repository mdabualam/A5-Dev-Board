const currentDate = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = `${dayOfWeek},  ${month} ${day}, ${year}`;
      document.getElementById("current-date").innerHTML = formattedDate;