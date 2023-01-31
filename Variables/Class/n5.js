//Scoop

//Since let is block scooped

let foo = 'bar';
var too = 'taj'
if(true){
  let foo = 'baaz';
  var too = 'monkey'
  console.log(foo);
  console.log(too);

}
  console.log(foo);
  console.log(too);


//Since var is function scooped

//Scoop

let foo = 'bar';
var too = 'taj'

function n(){
  if(true){
    let foo = 'baaz';
    var too = 'monkey';
    console.log(foo);
    console.log(too);
  }
}

  console.log(foo);
  console.log(too);
  n();
