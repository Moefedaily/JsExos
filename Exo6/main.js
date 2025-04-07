let convert = document.getElementById("convert");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", () => {
  let numberOfYears = document.getElementById("numberOfYears").value;

  let days = numberOfYears * daysInYear;
  document.getElementById("resultDays").textContent = days + " days";

  let hours = days * hoursInDay;
  document.getElementById("resultHours").textContent = hours + " hours";

  let minutes = hours * minutesInHour;
  document.getElementById("resultMinutes").textContent = minutes + " minutes";

  let seconds = minutes * secondsInMinute;
  document.getElementById("resultSeconds").textContent = seconds + " secondes";

  console.log(days + " days");
  console.log(hours + " hours");
  console.log(minutes + " minutes");
  console.log(seconds + " secondes");
});
