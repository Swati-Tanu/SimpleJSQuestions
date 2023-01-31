let reg_email = "xyz@gmail.com";
let reg_pass = "09876";

let ent_email = "xyz@gmail.com";
let ent_pass = "09876";

if(reg_email==ent_email){
  if(reg_pass==ent_pass){
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Wrong Credentials");
}