console.log("***Strings****");

// ?=========================================================
// ?                 STRINGLER
// ?=========================================================

//! String Tanımlama
const str1 = "Clarusway";
const str2 = `Hello5`;

console.log(typeof str2);

// String constructor ile String oluşuturma
const str3 = new String("World");
console.log(typeof str2);

const str4 = "🫀";

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

/* ---------------------------------- */
/*     STRING YAPISI VE INDEXLEME     */
/* ---------------------------------- */

let kelime = "Clarusway";
kelime = "Bootcamp";
console.log(kelime[0]);
console.log(kelime[1]);
console.log(kelime[8]);

for (let i = 0; i < 8; i++) {
  console.log(kelime[i]);
}
// Stringler, parça olarak değiştiremezsiniz
//immutable
kelime[0] = "H";
console.log(kelime);

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

// *=========================================================
// *               lenght - Property
// *=========================================================

//? Lenght => Bir stringin boşluklarda dahil kaç karakterden oluştuğunu verir.

const metin = "Clarusway😘";
let emoji = "🤪";
//Emojiler 2 karakter uzunluğundadır.
console.log(metin.length);
console.log(emoji.length);

for (let i = 0; i < metin.length; i++) {
  console.log(metin[i]);
}

//! ************STRING METHODS ************
// String metodları () kullanılır. (Arkaplanda fonksiyonlardır)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================
//? Karakterleri küçük harfe dönüştürme => .toLowerCase()
// Değişim geçicidir.Tamamen değiştirmiyor değiştirp kaydetmek istiyorsak yeni bir değere atamalıyız
console.log(metin.toLowerCase());
let yeniMetin = metin.toLowerCase();
console.log(yeniMetin);

//? Karakterleri büyük harfe dönüştürme => .toUpperCase()
console.log(metin.toUpperCase());

// let sehir = "Istanbul"
// console.log(sehir.toLocaleLowerCase("tr-TR"))
// console.log(sehir.toLowerCase())

/* ---------------------------------- */
/*    String Bİrleştirme yöntemleri   */
/* ---------------------------------- */

//* + ile birleştirme
//* concat ile birleştirme
//* Template literal (``) ile birleştirme

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + " " + text2);

let text = "Merhaba";

text += " Harvey";
console.log(text);

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
//concatanation

let s1 = "Yakarsa Dünyayı";
let s2 = " Garipler yakar";

console.log(s1.concat(s2));

let s3 = s1.concat(s2);
console.log(s3);

// *=========================================================
// *               Template Literals
// *=========================================================

// ES6 ile tanıtılan bu yöntem, backtick işareti (`) kullanarak string birleştirmeyi kolaylaştırır ve değişkenleri doğrudan string içinde kullanmanıza olanak tanır.

let str5 = "Clarusway";
let str6 = "Merhaba";
// let isim = prompt("Adın ne?")

console.log("ali merhaba");

console.log(
  `Ali
Merhaba
nasılsın
Harveyden selamlar`.length
);

//!Heap-Stack Örnek
// console.log(`${str5} ${str6} `)
// let a = 10
// let b = a
// console.log(b)
// a = 55
// console.log(b)
// let x = [1, 2, 3, 4, 5]
// let y = x;
// console.log(x[0])
// x[0]=55
// console.log(y)

//! String Parçalama Metodları
// split()
// substring()
// substr()
// slice()

// *=========================================================
// *                 split() immutable
// *=========================================================
// Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
// str.split(seperator)
// saparator : ayraç
//! Parçaladığı elemanları bir diziye aktarır.


let metin1 = "Clarusway IT Bootcamp";

console.log(metin1.split(" "));

let parcalanmısMetim = metin1.split(" ");

console.log(parcalanmısMetim[1]);

for (let i = 0; i < parcalanmısMetim.length; i++) {
  if (parcalanmısMetim[i] === "IT") {
    console.log("Bu cümlede IT kelimesi geçiyor");
  }
}

console.log(metin1.split(""));

// Verilen tarih bilgisini gün ay ve yıl oalrak ayırma

let date = "11.11.2024";
let newDate = date.split(".");
console.log(newDate);
let gun = newDate[0];
let ay = newDate[1];
let yil = newDate[2];
console.log(gun);

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

let newMonth = months.split(" / ");
console.log(newMonth);

/* -------------------------------------------------------------------------- */
/*                               //? Join metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// Javascript dilinde join metodu, biz dizi elemanı string olarak birleştirir. Join metodu dizi (array) alarak bunu virgül gibi bir karakter ile ayırarak string'e dönüştürür.

console.log(newMonth.join("_"))

/* -------------------------------------------------------------------------- */
//?                               Reverse Metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.

// Bir kelimeyi tersten yazdıran program

let kelime1 = "Merhaba"
console.log(kelime1.split("").reverse().join(""))

let send = "yahşi günde yar yahşidir yaman günde yetiş gardaş"

console.log(send.split(" ").reverse().join(" "))

// Polindrom 
let kelime2 = "madam"

let mesaj = kelime2===kelime2.split("").reverse().join("") ? "Polindromdur" : "Polindrom değildir"

console.log(mesaj)

console.clear();

/* ---------------------------------- */
/*                Slice               */
/* ---------------------------------- */
//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır.
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))

let sentence = "Merhaba cohort 18"

console.log(sentence.slice(0,7))
console.log(sentence.slice(8,14))

// negatif değer verilerek geriye doğru değer verilebilir
console.log(sentence.slice(-3))
console.log(sentence.slice(-9,-3))


//Girilen sayının tersini bulan fonsiyon 
let enterNumber = 6785;

// // const inverseOfNumber = (n) => {
// //     let concatNum;
// //     const inverse = n.toString().split("",)
// //     console.log(inverse.length);

// //     for (let i = inverse.length; i >= 0; i--) {
// //         concatNum += inverse[i];
// //     }
// //     return concatNum
// // }
// // console.log(+inverseOfNumber(enterNumber).slice(3));

/* ---------------------------------- */
/*              Substring             */
/* ---------------------------------- */
//! substring(başlangıç index numarası,bitiş index numarası) 
//Slicedan farkı negatif sayı kullanılmaz


console.log(sentence.substring(0,7))
console.log(sentence.substring(-3,0))

/* ---------------------------------- */
/*               Substr               */
/* ---------------------------------- */
//! substr(başlangıç index numarası,kaç adet karakter alınacağı)


console.log(sentence.substr(8,6))

/* ---------------------------------- */
/*!   String içinde arama işlemleri   */
/* ---------------------------------- */

// includes, indexOf, search ,match  metodlarını kullanabiliriz

/* ---------------------------------- */
/*              includes              */
/* ---------------------------------- */

//? includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.
//? caseSensitive bir özelliktir.

let kelime4 = "to be or not To be, That is The questions" 

console.log(kelime4.toUpperCase().includes("TO BE"))

//Bir site adresi güvenlimi değilmi kontrolü
// https : s secure

let url = "https://clarusway.com"

let msg = url.includes("https") ? "Bu site güvenlidir": "Bu site güvenli değildir"

console.log(msg)

/* ---------------------------------- */
/*               İndexOf              */
/* ---------------------------------- */
//? indexOf (aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(kelime4.indexOf("be"))
//Aradığımız kelime yoksa -1 döndürür
console.log(kelime4.indexOf("harvey"))

/* ---------------------------------- */
/*               search               */
/* ---------------------------------- */ 

//? search() bir string içindeki aranan elemanın ilk index numarsını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 

console.log(kelime4.search("be"))

//!REGEX- regular expression 
// Regex regular expression denir. Bunların yazım stili / işaretiyledir.

// Flags Kullanımı
// Düzenli ifadelerde çeşitli bayraklar kullanarak aramayı değiştirebiliriz:

// g : Global arama
// i : Büyük/küçük harf duyarsız arama

let variable = "HarveyWatson"
console.log(variable.search(/w/))

//[A-Z], [a-z] [0-9]

let kelime5 = "to be or not To be, 15 That is The questions" 
console.log(kelime5.search(/[A-Z]/))
console.log(kelime5.search(/[a-z]/))
console.log(kelime5.search(/[0-9]/))

// ^  olmayan
console.log(kelime5.search(/[^a-z]/))

/* ---------------------------------- */
/*                 match              */
/* ---------------------------------- */

//?match metodu, bir dize içindeki bir düzenli ifadeye (RegEx) uyan kısımları bulur ve bir dizi olarak döner.
// Bir dizi dönderir

let phone= "My phone number is 123-456-7890";

let result = phone.match(/\d+/g)

console.log(result)

let text3 = "Contact us at support@example.com or sales@example.com";

let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

let emails = text3.match(emailPattern);
console.log(emails)

/* ---------------------------------- */
/* startsWith(), endsWith() -- case sensitive */
/* ---------------------------------- */

// startsWith :.. ile başlıyormu (True , false)
// endsWith :.. ile başlıyormu (True , false)

console.log(phone.startsWith("m"))
console.log(phone.endsWith("5"))

//!Stringde Değişiklik yapma 

/* ---------------------------------- */
/*         Replace -immutable         */
/* ---------------------------------- */

let text4 = "Hello World, Who are You World" 

let newText = text4.replace("World", "Javascript")
console.log(newText)

let newTextAll = text4.replaceAll("World", "Javascript")
console.log(newTextAll)

/* ---------------------------------- */
/*                Trim                */
/* ---------------------------------- */
//? baş ve sondaki boşlukları kaldırmak için => trim

let metin2= "   Clarusway    "
console.log(metin2)

let yeniMetin2 = metin2.trim()
console.log(yeniMetin2)