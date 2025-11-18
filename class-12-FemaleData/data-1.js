let employees=[{"eid":1,"ename":"Danielle","gender":"Female"},
{"eid":2,"ename":"Patin","gender":"Male"},
{"eid":3,"ename":"Susie","gender":"Female"},
{"eid":4,"ename":"Allyson","gender":"Female"},
{"eid":5,"ename":"Hillel","gender":"Male"},
{"eid":6,"ename":"Viv","gender":"Female"},
{"eid":7,"ename":"Cristobal","gender":"Male"},
{"eid":8,"ename":"Evita","gender":"Polygender"},
{"eid":9,"ename":"Hussein","gender":"Male"},
{"eid":10,"ename":"Evangelina","gender":"Female"},
{"eid":11,"ename":"Vonni","gender":"Female"},
{"eid":12,"ename":"Pietro","gender":"Male"},
{"eid":13,"ename":"Garvy","gender":"Non-binary"},
{"eid":14,"ename":"Tiffani","gender":"Genderqueer"},
{"eid":15,"ename":"Melli","gender":"Female"},
{"eid":16,"ename":"Barri","gender":"Male"},
{"eid":17,"ename":"Putnam","gender":"Male"},
{"eid":18,"ename":"Rhiamon","gender":"Female"},
{"eid":19,"ename":"Marline","gender":"Female"},
{"eid":20,"ename":"Lyndsie","gender":"Female"}]


function display_Employees(){
    let rows=""
    for(emp of employees){
        if(emp.gender==="Female"){
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.gender}</td>
                      </tr>`
        }
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
    //document.getElementsByTagName('tbody')[0].innerHTML="GM";
}