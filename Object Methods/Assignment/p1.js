/*Problem-1 Rectangle Object

Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle*/

  let rectangle={
  l: 10,                
  w: 20,
  per: function(){ 
    console.log(2*(this.l+this.w));
  },
  area: function(){
    console.log(this.l*this.w);
  }
};

rectangle.per();
rectangle.area();