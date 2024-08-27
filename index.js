// "use strict";

// var firstName = "Alperen";

// console. log (firstName);

// harfler rakamlar, $ , _ sembolü kullanılabilir.
// ilk harf rakam olamaz

// message = "merhaba dünya";

// var message = "selam dünya";

// browser -> window
// server -> global

// console.log(message);

// console.log(window.message);

// window.console.log("merhaba");

// sloppy mode
// strict mode

// "use strict";

// let age = 26;

// age = 15;

// age ="isim"

// const daima değer ile başlaması lazım (declare edilmesi)
// bir kere declare edilince ikinci sefer değeri değiştirilemez

// const age = 26;

// console.log(age);

// var yerine -> const yada let
// const değiştiremeyeceğimiz değişkenler için
// let değiştirebileceğimiz değişkenler için

// const orijinalFiyat = 50;
// const indirim = 20;
// const satisFiyati = orijinalFiyat * (indirim / 100);

// console.log(satisFiyati);

// const fiyat = 20;
// const indirim = true;

// if(indirim === true) { }
// burayı çalıştır

// if (!indirim == false) { }
// burayı çalıştır

// variable shadowing
// let & const -> block scope

// if(indirim){
    // let fiyat = 20 -2;
    // console.log("indirimli fiyat", fiyat);
// }

// console.log("fiyat", fiyat);

// let isim = "Alperen";

// let message = 12;
// let messageSecond = 12;

// console.log(message + messageSecond);
// let message = "Merhaba " + isim + ", nasılsınız?"

// let message = `Merhaba ${isim} , nasılsınız?`;

// console.log(message);

// `bu bir string`

// "Bu bir string"

// "Archi's Academy'e hoşgeldiniz"

// const ikinciMesaj = 'Archi\'s Academy\'e hoşgeldiniz';
// const ucuncuMesaj = `Archi's Academy'e hoşgeldiniz`;

// console.log(ikinciMesaj);

// console.log(ucuncuMesaj);

// 'Merhaba hoşgeldiniz'

// `template literals stringi ${message}`

// const agirlik = 70;

// const ayAgirliği = `Aydaki ağırlığınız ${agirlik * 0.165}`;

// console.log(ayAgirliği);

// let firstName = "Alperen";

// let FIRSTNAME = "Ahmet";

// let FirstName = "Ali";

// console.log(FirstName, FIRSTNAME, FirstName);

// let value = "Alperen"
// let value2 = "hoşgeldiniz"

// 100 satır kod

// let message = `Merhaba ${value}, ${value2}`;

// console.log(message);

// let firstName = "Alperen";

// let greetMessage = "hoşgeldiniz"

// let message = `Merhaba ${firstName}, ${greetMessage}`;

// console.log(message);

// let isPopupVisible = true; 

// if(isPopupVisible){ }
