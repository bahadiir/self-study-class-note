// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz


const adYazdir=function(){
    console.log("Merhaba")
}

adYazdir()

//** Parametreli function exp. */
const isEvenOdd=function(a){  //a=67

    let result=a%2===0 ? "Even" :"odd"
    
    if (a<10){
        return a 
    }
    else{
        return result
    }

    

}
let sayi=34
 console.log(isEvenOdd(sayi)) 

/* -------------------------------------------------------------------------- */
//** Verilen 3 sayıdan en büyüğünü bulun (Math.max kullanmadan) */

let a=34
let b=67
let c=1

// const enb=function(){

//     if ((a>=b) && (a>=c)){
//         console.log(a)
//     }
//     else if((b>=a) && (b>=c)){
//         console.log(b)
//     }
//     else{
//         console.log(c)
//     }
// }

// enb()

/* -------------------------------------------------------------------------- */
// 2.yöntem
const enb=function(){

    let biggest=a;
    if (b>biggest){
        biggest=b;
    }
    if (c>biggest){
        biggest=c;
    }
    console.log(biggest)
}
enb()