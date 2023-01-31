//Nested conditions

//Facebook Login

let reg_email="abc@gmail.com";
let reg_pd = "0976";

let ent_email="abc@gmail.com";
let ent_pd = "09876";

if (ent_email==reg_email) {
  if(ent_pd==reg_pd) {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Wrong Credentials");
}