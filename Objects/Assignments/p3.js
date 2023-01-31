let arr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let arr1 = [32, 30, 26, 28, 44]
/*[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]*/
let bag=[];
for(i=0;i<arr.length;i++){
  let obj = {};
  obj.name=arr[i];
  obj.age=arr1[i];
  bag.push(obj);
}

for(let i=0;i<bag.length;i++){
  if (bag[i]["age"]>30){
    console.log(bag[i]["name"]);
  }
}