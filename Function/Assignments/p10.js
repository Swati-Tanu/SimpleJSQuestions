/*Write a function to convert a character to lower case.
Use this function to convert a given word to lower case.
Use that function to convert an array of strings to array of lower case strings.*/

function toLower(char)
{
  let lower="qwertyuiopasdfghjklzxcvbnm";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(let i=0;i<upper.length;i++)
  {
    if(char==upper[i])
    {
      return lower[i];
    }
  } 
  return char;
} 

console.log(toLower("A"));

function convertWordLower(word)
{
  let bag="";
  for(let i=0;i<word.length;i++)
  {
    let magic=toLower(word[i]);
    bag=bag+magic;
  }
  return bag;
}
console.log(convertWordLower("IRON MAN"));

/*Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]*/

function converArrayLower(arr)
{
  let bag=[];
  for(let i=0;i<arr.length;i++)
  {
    let magic=convertWordLower(arr[i]);
    bag.push(magic);
  }
  return bag;
}
let arr=["MA", "SA", "I", "SCH", "OOL"];
console.log(converArrayLower(arr));