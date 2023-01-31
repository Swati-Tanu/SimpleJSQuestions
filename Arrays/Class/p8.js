//Print the first 3 items in the array using a loop.
var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for(i=0;i<movies.length;i++){
  if(i==3){
    break;
  }console.log(movies[i]);
}

//Print all movies except the third movie.
for(j=0;j<movies.length;j++){
  if(j==2){
    continue;
  }console.log(movies[j]);
}