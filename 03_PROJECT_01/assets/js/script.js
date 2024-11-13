const currentYearContainer = document.getElementById("currentYear");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

currentYearContainer.innerHTML = currentYear;
