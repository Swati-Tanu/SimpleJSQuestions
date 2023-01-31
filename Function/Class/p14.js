function mySplit(str) {

  let arr = [];

  let bag = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] != " ") {
      bag = bag + str[i];
    } else {
      arr.push(bag);
      bag = "";
    }
  }
  arr.push(bag);
  console.log(arr);
}

mySplit("My name is Bruce Wayne");