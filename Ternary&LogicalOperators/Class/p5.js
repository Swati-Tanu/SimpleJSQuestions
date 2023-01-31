let choice = 7;

//Using Ternary

choice == 1 ? console.log("Hindi") : choice == 2 ? console.log("English") : choice == 3 ? console.log("Telgu") : 
choice == 4 ? console.log("Punjabi") : choice == 5 ? console.log("Marathi") : console.log("Wrong Input");

//Using Conditional

if (choice == 1) {
  console.log("Hindi");
} else if (choice == 2){
  console.log("English");
} else if (choice == 3){
  console.log("Telgu");
  } else if (choice == 4){
  console.log("Punjabi");
  } else if (choice == 5){
  console.log("Marathi");
} else {
  console.log("Wrong Input");
}