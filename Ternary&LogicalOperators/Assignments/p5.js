//Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...
let day = "wed";
switch (day) {
  case "sun": console.log("Sunday");
    break;
  case "mon": console.log("Monday");
    break;
  case "tue": console.log("Tuesday");
    break;
  case "wed": console.log("Wednesday");
    break;
  case "thru": console.log("Thrusday");
    break;
  case "fri": console.log("Friday");
    break;
  case "sat": console.log("Saturday");
    break;
  default: console.log("Wrong Input");
}