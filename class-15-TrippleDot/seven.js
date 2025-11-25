let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    email:"rg@gmail.com"
}
let detials={
    email:"rg@ibm.com",
    loc:"Wayanad",
    avail:true
}
let emp_Details={...emp, ...detials}
console.log(emp_Details)