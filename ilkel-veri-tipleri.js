/* 
Primitive types: 
string
number
boolean
undefined
null
symbol

Geri kalan her şey -> Object type

*/

// console.log(typeof 42);

// console.log(typeof "42");

// console.log(typeof window);

// console.log(typeof undefined);

// let message = "hello world";

// console.log(typeof message);

// 1) Explicit type conversion
// 2) Implicit type conversion

// let myNumber = 42;

// console.log(typeof myNumber);

// console.log(Boolean(myNumber));

// console.log(typeof String(myNumber));

// console.log("2" * "5"); NUMBER OLDULAR
// console.log(10 + "20"); ONU STRINGE ÇEVİRDİ
// console.log(10 + "yazi"); STRING OLARAK İLERDİ
// console.log(10 * "5"); NUMBER OLDULAR

 // if(Boolean(value) === true){
    // kodu çalıştır
// } 


// let myString = "selam";
// console.log(Boolean(myString));

// let myString = 0;
// console.log(Boolean(myString));

// let myString = "";
// console.log(Boolean(myString));

// truthy (true)
// falsy (false)

//if("hello"){
    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}

//if(""){
    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}

//if(6){
    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}

//if(0){

    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}


// falsy değerler ->
// false
// 0
// "" yada '' yada `` -> boş string
// null
// undefined
// NaN -> Not a number

// let deger = "";

//if(!deger){

    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}

//let deger1 = {}; // boş object

//if(deger1){

    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}


//const userName = "Archi's Academy";

//if(userName){
    //console.log("çalıştır");
//}

//const userName1 = "";

//if(!userName1){
    //console.log("çalıştır");
//}

// triple equals ===

//if("5" === 5){
    //console.log("çalıştır");
//} else {
    //console.log("geç");
//}

if(NaN === NaN){
    console.log("çalıştır");
} else {
    console.log("geç");
}

if(Boolean(NaN) === Boolean(NaN)){
    console.log("çalıştır");
} else {
    console.log("geç");
}