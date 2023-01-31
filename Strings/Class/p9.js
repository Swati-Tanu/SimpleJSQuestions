//Count the names which contain A in them.
var names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
var count = 0;
for(var i=0; i<names.length; i++)
{
var name = names[i];
for(var j = 0; j<name.length; j++)
{
if(name[j]=='a' || name[j]=='A')
{
count++;
}
}
}
console.log(count);