//Declare a function to print even numbers present inside an array.


let arr = [10,20,33,44,5];

let even = (arr) => {
  let even_arr =                      arr.filter((element,index) => {
    return element%2==0;
  });
  console.log(even_arr)
}

even(arr);


/*let arr = [10,20,33,44,5];

let even = (arr) => {
  let even_arr =                      arr.filter(function(element,index){
    return element%2==0;
  });
  console.log(even_arr)
}

even(arr);
*/
