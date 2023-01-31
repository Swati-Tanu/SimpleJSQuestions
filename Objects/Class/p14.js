let apple_pro=[
  {name: "macbook", rating:4.6, price:180000},
  {name: "iphone", rating:4, price:80000},
  {name: "ipad", rating:4.2, price:55000},
  {name: "Airpods", rating:4.3, price:20000},
];
//Print products name whose ratings are more than 4.2

for(let j=0;j<apple_pro.length;j++){
  if(apple_pro[j].rating>=4.2){
  console.log(apple_pro[j].name);
  }
}