let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priya",esal:65000},
    {eid:104,ename:"Modi",esal:75000}
]
//iterate using while 
let i=0;
while(i<=employees.length-1){
    console.log(employees[i].ename)
    i++;
}

/* for(let emp of employees){
    console.log(emp.ename)
} */