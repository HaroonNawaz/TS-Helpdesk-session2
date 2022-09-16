// let var1 = "new value";
// let var2: string
// var2= "another value"
// let var3:any;
// var3=123
// var3=true
// var3=""
//union *********************************
// let var1 : string | number 
// var1= "dkfdkf"
// var1 = 123
//*************************************
// let var1: (number |string)[]
// var1 = [123,"text1", 'tex2', 'tex2', 123, 222]
// console.log(var1);
//*********************************** */
//************************ 
//
// //alias
// type myHome ={
// HouseNo: number,
// location: string
// }
// let var2: myHome ={
// HouseNo:123,
// location: "my locatiohn"
// }
// let var4:myHome 
//**************************************/
// type newCAr ={
//     NoOfSeats: number[]
//     model: string
// }
// let var5: newCAr = {
//     NoOfSeats: [4, 6, 8,10,11],
//     model: "Toyota"
// }
// let var6: newCAr ={
//     NoOfSeats: [],
//     model: ""
// }
// //***************************************** */
// function myFunc(value1:(string|number)){
//     if (typeof(value1) ==="string") {
//         console.log("the value you have enter is string")
//             }
//     else if (typeof(value1) === "number"){
//         console.log("the value you have type number ")
//     }
// }
// myFunc(123);
//********************************************** */
// function addNo( value1: number, value2: number){
//     return value1 + value2;
//     }
// console.log(addNo(2, 2))
//************************************************ */
// let var7: number | string;
// var7 = "Pakistan";  
//                         ///narrow implement
// var7.toUpperCase();
// var7 = 123;
// var7.toString;
//************************************************ */
//const var8 = "Pakistan won"         //literal variable
//*********************************************** */
//let newObj = { pro1:string, pro1: number};
//************************************** */
var student = {
    name: "my Name",
    rollNo: 123,
    subject: "CS"
};
console.log(student.rollNo, student.name, student.subject);
