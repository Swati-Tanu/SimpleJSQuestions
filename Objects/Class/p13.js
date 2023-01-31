//Objects inside array.

let emp_data = [
{ name: "Aman", age: 34, location: "Delhi",  salary: 45000 },

{ name: "Bholu", age: 40, location: "Pune", salary: 62000 },

{ name: "Dholu", age: 42, location: "Mumbai", salary: 67000 },

{ name: "Munnu", age: 30, location: "Kolkata", salary: 38000 },

{ name: "Chunnu", age: 28, location: "Bangalore", salary: 35000 }
];

for(let i=0;i<emp_data.length;i++){
console.log(emp_data[i]); //emp_data is an array but every value inside it is an object.
console.log(emp_data[i].name); //To print just name.
}

for(let j=0;j<emp_data.length;j++){
  if(emp_data[j].salary>=50000){
console.log(emp_data[j].name,emp_data[i].salary);
  }}