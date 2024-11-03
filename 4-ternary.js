//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

let yas = 30;

if (yas >= 18) {
  console.log("oy kullanabilirsin");
} else {
  console.log("Oy kullanamazsın");
}

// 1.kullanım

yas >= 18 ? console.log("oy kullanabilirsin") : console.log("oy kullanamazsın");

yas > 18 ? console.log("oy kullanabilir") : null;

//2.kullanım  (daha yaygın)
console.clear();
let message = yas > 18 ? "oy kullanabilir" : "oy kullanamaz";
console.log(message);

/* -------------------------------------------------------------------------- */
// yas 18den büyük sağlıklı ve erkek : askerlik yapabilir
let age = 20;
let gender = "erkek";
let health = true;

if (age >= 18 && gender == "erkek" && health == true) {
  console.log("askerlik yapabilir");
} else {
  console.log("askerlik yapamaz");
}
console.clear()

const sonuc =
  age >= 18 && gender == "erkek" && health == true
    ? "askerlik yapabilir"
    : "askerlik yapamaz";
console.log(sonuc)

/* -------------------------------------------------------------------------- */
// verilen sayı tek mi çift mi kontrol eden ternary ifade
// let sayi = +prompt("Bir sayı giriniz:") 
// console.log(sayi)
// let result = sayi%2===0 ? "çifttir" :"tektir"
// console.log(result)


// Hızı 120den büyükse hızlı, 90dan büyükse normal, 90 altıyse yavaş yazan ternary ifade

let speed=70

if (speed>=120){
    console.log("hızlı")
}
else if (speed>=90){
    console.log("normal")
}
else {
    console.log("yavaş")
}

// nested ternary 
let spdy=speed>120 ? "hızlı" : speed>90 ? "normal" :"yavas";
console.log(spdy)

// verilen gün cumartesi yada pazar ise haftasonu yazsın değilse haftaiçi
// ternary ile yapalım
let gun="cumartesi"

let check=gun==="cumartesi" || gun==="pazar" ? "haftasonu" : "haftaiçi"
console.log(check)