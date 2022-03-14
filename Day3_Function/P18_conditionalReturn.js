var looper = function(x){
 if (x%5===0) {
 return;
 }
 console.log(x)
}
for(var i=1;i<10;i++){
 looper(i);
}