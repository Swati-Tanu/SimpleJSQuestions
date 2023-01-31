/*Create an object with the following functionality

Ability to add 3 students details and their marks in 3 subjects.
Method to find the student with the least total.
Method to find the student with the highest total.*/

let object = {

  arr: [],

  addDetails: function(name, maths, eng, phy) {
    let obj = {};

    obj.name = name;
    obj.maths = maths;
    obj.eng = eng;
    obj.phy = phy;

    this.arr.push(obj);
    console.log(this.arr);
  },

  least: function () {
      let least = Infinity;
      let least_student;
      for (let i = 0; i < this.arr.length; i++) {
      let total = this.arr[i].maths + this.arr[i].eng +              this.arr[i].phy;

        if (least > total) {
          least = total;
          least_student = this.arr[i].name
        }
      }
      console.log(least_student, least);
  },

  highest: function() {
      let max = -Infinity;
      let max_student;
      for (let i = 0; i < this.arr.length; i++) {
      let total = this.arr[i].maths + this.arr[i].eng +               this.arr[i].phy;

        if (max < total) {
          max = total;
          max_student = this.arr[i].name
        }
      }
      console.log(max_student, max);

  }
}

object.addDetails("Aman", 33, 89, 57);
object.addDetails("Raghav", 29, 57, 49);
object.addDetails("Sumeet", 63, 59, 47);

object.least();
object.highest();