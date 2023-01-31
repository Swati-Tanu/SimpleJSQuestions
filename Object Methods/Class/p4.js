//Declare object method to find the perimeter and area of rectangle.

let rectangle={
  l: 10,                
  w: 20,
  per: function(){ //l & w has to be defined inside the scope of function but if not then use the magic word "this."
    console.log(2*(this.l+this.w));
  },
  area: function(){
    console.log(this.l*this.w);
  }
};

rectangle.per();
rectangle.area();

//this. is used to access the data present inside the object.