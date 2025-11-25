let p_id=101;

let p_Name="Marker Pen";

function get_Product_Details(){
    return "Fetching Product Details"
}
class Product{
    constructor(){
        console.log("Inside Product class constructor")
    }
}

//default export - export single value
//export default p_Name;
//named export - export multiple values
export  {p_Name,get_Product_Details, Product}