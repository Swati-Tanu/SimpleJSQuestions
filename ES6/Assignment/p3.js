/*Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]*/

let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const toLowerCase = (word) => {
  let str = "";
  for(let j=0;j<=word.length-1;j++){
    for(let k=0;k<=upper.length-1;k++){
      if(word[j] == upper[k]){
        str+=lower[k];
        break;
      }
    }
  }
  return str;
}

let input = ["MA", "SA", "I", "SCH", "OOL"];
let output = [];

for(let i=0;i<input.length;i++){
  let answer = toLowerCase(input[i]);
  output.push(answer);
};

console.log(output);