//Print the last 3 items of an products array.
var products = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];
let start = 0;
if(products.length>3){
  start = (products.length-3)
}
for(i=start;i<products.length;i++){
  console.log(products[i]);
}