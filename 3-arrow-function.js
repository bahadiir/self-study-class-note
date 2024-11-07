// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const selamla=()=>{
    console.log("arrow function ile selamla");
}

selamla()
/* ---------------------------------------------------------- */
//* tek satırlık bir kod olacaksa {} ve return gerekmez 

const naber=()=>console.log("merhaba");

naber()
/* ---------------------------------------------------------- */
// sayının3 e bolunup bolunmedıgını kontrol eden kod blogu  

const bol=(num)=> num%3===0? "3 e bolunur" : "3 e bolunmuyor";


    const ucebolum=(num)=>bol
     let result;
     if (num%3===0){
        result="3 e bolunur";
    

}
else{}

//parametreli fonksiyon kullanımı 

const add=(a,b)=> document.write (a+b);

add(45,78) 





