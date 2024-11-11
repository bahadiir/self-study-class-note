// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):


// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır


//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır 
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

function yazdir(){
        console.log("Merhaba Nasılsınız")
    }
    console.log("Fonksiyondan önceyim")
    yazdir()
    console.log("Fonksiyondan sonrayım")
    //* fonksiyonlar bir defa yaz defalarca kullan
    
    yazdir()
    yazdir()
    yazdir()
    yazdir()
    yazdir()
    yazdir() 
    
    // Hoisting : yukarı kaldırma 
    //! sadece function declerationda hoisting yapılıyor
    // Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.
    
    topla()
    
    function topla(){
        console.log(25+98514486)
    }
    
    // Js Motoru kodu aşağıdaki şekilde gördüğü için hoisting olabiliyor.
    
    function topla(){
        console.log(25+98514486)
    }
    topla()
    
    console.clear()
    //? Parametreli fonksiyonlar
    // Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır. 
    //?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
    //* Fonksiyon tanımlanırken verilen değerlere arguments denir
    
    
    
    function toplam(a,b,c){ // arguments
    // console.log(a+b+c)
     let result=a+b+c
    }
    console.log( toplam(45,67,89)) // parametre
    toplam(435345,54654,78758) // parametre
    toplam(2343,54654,132) // parametre
    toplam(132,565,232) // parametre
    toplam(65756,8098,234) // parametre
    console.clear()
    /* -------------------------------------------------------------------------- */
    // fonksiyonlarda değişkenin değeri gönderilir.değişkenin kendi gitmez
    // başlangıç değeri,varsayılan değer tanımlanabilir.
    function selamla(ad,yas=34,meslek="developer"){
    console.log(ad)
    console.log(yas)
    console.log(meslek)
    
    
    }
    
    let name="Sema"
    let age=40;
    let job="developer"
    let meyveListesi=["elma","armut"]
    let kilo=67
    selamla(name)
    
    /* -------------------------------------------------------------------------- */
    // birçok deger gönderilecekse arguments keyword faydalanılabilir.
    function degerler(a,b){
        console.log(a)
        console.log(b)
        console.log(arguments)
    }
    
    
    degerler(34,5465,2342,14,53,783432,798,67,6557652,213,8678,345435)
    
    /* -------------------------------------------------------------------------- */
    
    //! return keyword */
    function yasHesapla(isim,tarih){
    
        // console.log(`Merhaba Ben ${isim}, ben ${2024-tarih} yaşındayım`)
    
        let yasBul=2024-tarih
        return yasBul
    }
    
    const yas=yasHesapla("Neva",1990)
    console.log(yas)
    if (yas>30){
        console.log("Yaşı 30dan büyüktür")
    }
    else{
        console.log("Yaşı 30dan küçüktür.")
    }
    
    //dairenin çevresini bulan fonksiyonu
    function daireCevresi(r){
        let cevre=2*Math.PI*r
        // console.log(cevre)
        return cevre
    }
    
    console.log(daireCevresi(5)) 
    let sonuc=daireCevresi()
    console.log(sonuc)
    // if (sonuc>30){
    //     console.log("bu daire hayallerimdeki daire olamaz")
    // }