let products = ["macbook", "iphone", "ipod", "airpods"];
let price = [180000, 80000, 55000, 20000];

let arr = [];
for(let i=0;i<products.length;i++){
  let obj = {};
  obj.name=products[i];
  obj.price=price[i];
  arr.push(obj);
}console.log(arr);