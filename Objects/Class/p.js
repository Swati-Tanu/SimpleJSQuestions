//Area of square

let square = {
  side : 5,
  get area(){
    return this.side ** 2
  }
}

square.side = 10;
console.log(square.area)

//Concatenation

function stringConcat(seperator, ...strings){
  let returnVal = '';
  strings.forEach((string, i) => {
    if(i == strings.length-1){
    returnVal += string;
    }else{
      returnVal += string + seperator;
    }
  })
  return returnVal;
}

console.log(stringConcat("+","this","is","invalid"))

//Destructuring

let [first,second,third, ...others] = [1,2,3,4,5,6,7,8];

console.log(first);
console.log(second);
console.log(third);
console.log(others);

//Matchstick Houses

function matchHouses(house){
  if(house <= 0){
    return 0;
  } else {
    return (house*6) - (house-1);
  }
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));