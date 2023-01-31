//Logical operators
//1. && (AND)

let a = 10;
let b = 20;
let c = 15;

//Using Nested condition.
if (a<c) {
  if(b>c) {
    console.log("Hello there!");
  }
} else {
  console.log("Something is wrong");
}

//Using logical op.
if (a<c && b<c) {
    console.log("Hello there!");
  } else {
    console.log("Something is wrong");
}

//Using ternary op.
a<c && b>c ? console.log("Hello there!") : console.log("Something is wrong");

// X scored 75 marks in English (check the subject as well), the passing marks is 70. Print "Passed in English" if he scored more than passin marks or print "Failed".

let subject = "English";
let marks = 75;
let pass_marks = 70;

//Nested

if (marks>pass_marks) {
  if (subject == "English") {
    console.log("Passed in English");
  }
} else {
  console.log("Failed");
}

//Logical
if (marks>pass_marks && subject == "English") {
    console.log("Passed in English");
} else {
  console.log("Failed");
}

//Ternary
(marks>pass_marks && subject == "English") ? console.log("Passed in English") : console.log("Failed");