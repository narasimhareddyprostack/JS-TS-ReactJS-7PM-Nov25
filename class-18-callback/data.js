let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
]
let create_New_Employees=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}
let get_Employees=()=>{
    setTimeout(()=>{
        let rows="";
        for(let emp of employees){
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                       </tr>`
        }
    document.getElementById('tb_data').innerHTML=rows;
    },2000)
}
create_New_Employees({eid:103,ename:"Priyanka",esal:65000},get_Employees)
