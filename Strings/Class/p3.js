let name = 'Masai School';

//Vertically
for(i=0;i<name.length;i++){
  console.log(name[i]);
}

//Horizontally
console.log(name);

//To add space
let bag="";
for(j=0;j<name.length;j++)
{
  bag=bag+name[j]+" ";
}
console.log(bag);

//Reverse loop

for(k=name.length-1 ;k>=0; k--)
{
  console.log(name[k]);
}

//Reverse loop in one line
let opp="";
for(l=name.length-1;l>=0;l--)
{
  opp=opp+name[l];
}
console.log(opp);

/*Empty bag is taken when: 
  1. converting something to string.
  2. When changing a string */