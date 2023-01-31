//Write a function to reverse a string.

function reverse(str){
let new_str="";
for(let i=str.length-1;i>=0;i--){
  new_str+=str[i]
}
return new_str
}
let reverse_string = reverse("Ironman");
console.log(reverse_string);

//Check Palindrome.
let name ="racecar";
let palindrome= reverse(name);
if(name==palindrome){
  console.log(name,"is a palindrome")
}else{
    console.log(name,"is not a palindrome")
}

  
