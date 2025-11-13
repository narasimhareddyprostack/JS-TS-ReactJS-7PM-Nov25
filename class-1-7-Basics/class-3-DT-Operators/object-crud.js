//create
let emp={ 
    eid: 101, 
    ename: 'Rahul', 
    esal: 75000 
    }
//read
console.log(emp)
//read object vlaues - object.property
console.log(emp.eid)   //101
console.log(emp.ename) //Rahul
console.log(emp.esal)  //45000
console.log(emp.loc)  //undefined
//update
emp.ename="Rahul Gandhi"
console.log(emp)

//delete
delete emp.esal;
console.log(emp)