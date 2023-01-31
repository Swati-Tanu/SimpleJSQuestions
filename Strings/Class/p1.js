let s = "Masai School";

console.log(s[0]);
console.log(s.length); //space is also considered as an element.
console.log(s);//printing whole string in one line.
console.log(s[5]); //printing the space

for(var i=0; i<s.length; i++){
  console.log(s[i]);//printing in new line.
}

s[0] = "N";
console.log(s); //In string we cannot change the value.