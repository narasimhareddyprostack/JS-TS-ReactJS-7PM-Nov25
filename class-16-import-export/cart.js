//default import 
//import p_Name  from "./Product.js";

//named import 
import {get_Product_Details,Product} from './Product.js'

let msg=get_Product_Details()  //function invocation
console.log(msg)
new Product()  //object creation