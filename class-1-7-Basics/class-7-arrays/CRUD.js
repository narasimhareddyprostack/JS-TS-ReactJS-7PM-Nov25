//create
let enames=["rahul","sonia","priyanka","Modi"]
//index        0     1          2           3   

//read
console.log(enames)
//how to read array elements - using indexing
console.log(enames[0])  //rahul
console.log(enames[1])  //sonia
console.log(enames[2])  //priyanka
console.log(enames[3])  //modi
console.log(enames[8])  //undefined
//update
enames[0] ="Rahul Gandhi"
console.log(enames)
//delete
enames.pop()
enames.pop()
enames.pop()
enames.pop()
console.log(enames)
