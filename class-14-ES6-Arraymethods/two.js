let enames=["rahul","sonia","priyanka","modi"]

//         ["RAHUL","SONIA","PRIYANKA","MODI"]
/*
    1.create new array - name : unames , based on existing array
    2.create new array - contains all upper case employee names
    expected output:
           ["RAHUL","SONIA","PRIYANKA","MODI"]
*/
let unames=[]
for(ename of enames){
    unames.push(ename)
}
console.log(unames)