//Given an array find the unique items in the array.

let names = ["Chunnu", "Munnu", "Dholu", "Munnu", "Chunnu", "Kalia"]

let a_list={};//unique always means key so use object.

for(let i=0; i<=names.length-1;i++)//Simple for loop as it is applied on an array and not on an object.
{
 if(a_list[names[i]]==undefined){
   a_list[names[i]]=1;
 }else{
   a_list[names[i]]++;
 }
//name[i] will be key of unique list. The key actually gets updated if already present and makes it unique that way.
} 
for(let key in a_list){
  if(a_list[key]==1){
    console.log(key);
  }
}
/*let unique_list = {};
unique_list["Chunnu"]=1;
unique_list["Munnu"]=1;

Likewise:

unique_list[names[0]]=1;
unique_list[names[1]]=1;
unique_list[names[i]]=1;
console.log(unique_list);*/