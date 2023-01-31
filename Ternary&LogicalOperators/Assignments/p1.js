//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let yob = 1997;
let age = 2022 - yob;

age >= 13 && age <= 19 ? console.log("Teenage") : age >= 20 && age <= 29 ? console.log("Tweenties") : console.log(NA);
//condition 1 ? code 1 : code 2 if not present then condition 2 ? code 2 : code 3