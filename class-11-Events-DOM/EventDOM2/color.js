function change_Color1(){
    //alert("Test Case 123")
    document.getElementById('btn1').style.backgroundColor="green"
}
function change_Color2(){
    //alert("Test Case 123")
    document.getElementById('btn2').style.backgroundColor="yellow"
}
function change_Color3(){
    //alert("Test Case 123")
    document.getElementsByTagName("input")[0].style.backgroundColor="green"
}

function change_Color4(){
    //alert("Test Case 123")
    document.getElementsByTagName("input")[1].style.backgroundColor="yellow"
}
function change_Case(){
    let ename=document.getElementsByTagName("input")[1].value;
    //alert(ename)
    document.getElementsByTagName('input')[1].value=ename.toUpperCase()
}