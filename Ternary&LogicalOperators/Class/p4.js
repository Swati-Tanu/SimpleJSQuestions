//3. ! (NOT)

console.log(2 !="2"); //checking just value.
console.log(3 != "2");

console.log("2"!=="2");//checking value and datatype.
console.log(3 !== "3");

let result = (5>4 && 3<2) && (2==3 || 3=="3") || !(2=="2" && 3>2);
console.log(result); //Order of priority- && is solved first then ||.

