let employees=[
    {"eid":101,"ename":"Rahul","gender":"Male"},
    {"eid":102,"ename":"Sonia","gender":"Female"},
    {"eid":103,"ename":"Priyanka","gender":"Female"}
]
//write JS script to update your table body
function display_Employees(){
    let rows="";
    for(emp of employees){
        rows=rows+`
                <tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.gender}</td>
                </tr>
                  `
    }

    document.getElementById('tb_data').innerHTML=rows;
    //document.getElementById('tb_data').innerHTML="GM"
}