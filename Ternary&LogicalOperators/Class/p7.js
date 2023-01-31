//Imp Ques
//1. You are given five numbers, stored in the variables with the following names one, two, three, four, five. Find the value ofsum1andsum2, such that sum1 = one + two, sum2 = three + four. If the value of both sum1 and sum2 is greater than the value stored in variable five, printYes, else print No.

function twoSumsOneNumber(one, two, three, four, five) {
    // Write code here
    let sum1 = one + two;
    let sum2 = three + four;
    if (sum1 > five && sum2 > five) { //Look at this line carefully.
        console.log("Yes");
        }
     else {
        console.log("No");
    }
}

//2.You are given five numbers, stored in the variables with the following names one, two, three, four, five. Find the value ofsum1andsum2, such that sum1 = one + two, sum2 = three + four. If the value of sum1 or sum2 is greater than the value stored in variablefive, printYes, else print No.

function twoSumsOneNumberII(one, two, three, four, five) {
    // Write code here
    let sum1 = one + two;
    let sum2 = three + four;
    if (sum1 > five || sum2 > five) {
        console.log("Yes");
        }
     else {
        console.log("No");
     }
}
