//2.if...else condition

let a = 10;
let b = 15;
if(a<b){
  console.log("a is less than b");
} else {
  console.log("a is greater than b");
}

//If the total bill is more than the discount price then print "Discount Applied" otherwise print "No Discount".
let dis_price = 699;
let bill_price = 750;
  if(dis_price<bill_price){
  console.log("Discount Applied");
} else {
  console.log("No Discount");
}

//If the total bill is more than the discount price then give a discount of 10% and print otherwise print the bill price.
if(dis_price<bill_price){
  console.log(bill_price - (0.1*bill_price));
} else {
  console.log(bill_price);
}