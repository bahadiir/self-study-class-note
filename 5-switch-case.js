//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------
// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

// break 

// let urun=prompt("Lütfen bir ürün giriniz:")
// let fiyat;

// switch (urun){
// case "kalem":
//     fiyat="kalem 5$";
//     break;
// case "defter":
//     fiyat="defter 10$";
//     break;
// case "silgi":
//     fiyat="silgi 2$";
//     break;

// default:{
//     console.log("uygun bişey yoksa çiklet vereyim bari")
// }
// }

// fiyat ? console.log(fiyat) : console.log("geçersiz ürün girişi yaptınız")

/* -------------------------------------------------------------------------- */
// Kıdeme göre alınacak promosyon miktarını gösteren programı switch-case ile oluşturalım

// prof: 1000$
// senior: 700$
// junior: 300$
// default:100$;

let maas=1000;
let kidem=prompt("Personelin kıdemini girin:")
let promosyon;

switch (key) {
    case value:
        
        break;

    default:
        break;
}

/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */
// for (başlangıç; koşul; artış) {
//     // Döngü bloğu
//   }

// Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.
for (let i = 0; i < 5; i++) {
    console.log(i);
  }