//Rest parameters: Converts the parameters into array.

/*function addition(a,b,c,d){
  console.log(a*b*c*d);
}
addition(10,20,30,40)*/

//In order to get rid to putting numerous parameters over and over again we can use spread operator with array.(It is just one trick).
function addition(...arr){//It is called rest parameters.
  let sum=0;
  for(let i=0;i<arr.length;i++){
  sum+=arr[i];
}console.log(sum);
}
addition(10,20,30,40)

//No need to use rest parameter if it is already array but if there are simple random numbers then it can be changed using rest parameter.