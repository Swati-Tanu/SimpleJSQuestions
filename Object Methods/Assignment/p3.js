let object = {
  
  arr  : [],

  addDetails: function(name, quantity, price) {
    let obj = {};

    obj.name = name;
    obj.maths = quantity;
    obj.eng = price;

    this.arr.push(obj);
    console.log(this.arr);
  },

  total : function(){
    for (let i = 0; i < this.arr.length; i++) {
      let total_value = this.arr[i].quantity *             this.arr[i].price;
      console.log(total_value);
    }
  }
}

object.addDetails("Rice", 3, 60);
object.total();