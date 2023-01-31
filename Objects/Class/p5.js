let obj = {};

//add name, age, location and isMarried in the object then update the location to "obj["name"]="Wayne";
obj["name"]="Bruce Wayne";
obj["age"]=34;
obj["location"]="Gotham City";
obj["isMarried"]=false;
console.log(obj);

obj["location"]="GOA";
console.log(obj);

//To delete;
delete obj["age"];
console.log(obj);
