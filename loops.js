console.log("for loop");
for(var i =0;i<5;i++){
    process.stdout.write(i);
}
console.log("while loop");
i=0;
while(i<5){
    console.log(i);
    i++;
}
console.log("do-while loop");
i=0;
do{
    console.log(i);
    i++;
}while(i<5);
console.log("for-in loop");
var arr = [10,20,30];
for(var index in arr){
    console.log(index);
}
console.log("for-of loop");
for(var val of arr){
    console.log(val);
}
