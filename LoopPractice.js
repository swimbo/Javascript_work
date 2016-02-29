// Example
for(var i = 0; i < 5; i++){
    console.log(i);
}
// Problem 1
for(var i = 0; i < 600; i += 100){
    console.log(i);
}
// Problem 2

for(var i = 1; i < 65; i){
    console.log(i)
    var i = i + i;
}
// Problem 3
for(var i = 1; i < 4; i++){
    console.log(i);
    console.log(i);
    console.log(i);
}
// Problem 4
for(var i = 0; i < 11; i+=2){
    console.log(i);
}
// Problem 5
for(var i = 3; i < 16; i+=3){
    console.log(i);
}
// Problem 6
for(var i = 9; i > -1; i--){
    console.log(i);
}
// Problem 7
for(var i = 0; i < 4; i++){
    console.log(i);
    if(i === 3){
      for(var i = 0; i < 4; i++){
          console.log(i);
          if(i === 3){
            for(var i = 0; i < 4; i++){
                console.log(i);
            }
          }
      }
   }
}
