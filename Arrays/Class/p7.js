//To print in new line

var names = ["Chunnu", "Munnu", "Jhunnu", "Dholu", "Molu"];
var marks = [33,87,24,67,35];

/*console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);*/

//using loop
for(var i = 0;i<names.length; i++)//or i<=(names.length - 1)
{
  console.log(names[i]);
  
} 
for(var j = 0;j<names.length; j++){
console.log((j+1) + "." + names[j]);//To put numbering
}