// Count the names starting with N or n.
var names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
var count = 0;
for(var i=0; i<names.length; i++)
{
var name = names[i];
if(name[0] == "N" || name[0] == "n")
{
count++;
}
}
console.log(count);
