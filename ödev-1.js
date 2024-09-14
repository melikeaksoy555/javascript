const firstNumber = 18;
const secondNumber = 9;

// Toplama işlemi
const sum = firstNumber + secondNumber;
console.log(`sum = ${sum}`);

// Çıkarma işlemi
const extraction = firstNumber - secondNumber;
console.log(`extraction = ${extraction}`);

// Çarpma işlemi
const multiplication = firstNumber * secondNumber;
console.log(`multiplication = ${multiplication}`);

// Bölme işlemi
if (secondNumber !== 0) {
  const division = firstNumber / secondNumber;
  console.log(`division = ${division}`);
} else {
    console.log("İkinci sayı sıfır olamaz");
}

// İsimle birlikte bir selamlaşma mesajı
const userName = 'MELİKE'
console.log(`Merhaba, ${userName}!`);

// İsmin uzunluğunu
const nameLength = userName.length;
console.log(`İsmin uzunluğu ${nameLength} karakterdir.`);


// sayının pozitif, negatif veya sıfır olması
const whatIsThisNumber = 0;
 if (whatIsThisNumber > 0) {
    console.log("sayı pozitif");
 } else if(whatIsThisNumber <0) {
    console.log("sayı negatif");
 } else {
    console.log("sayı sıfır");
 }

 // İki sayının büyüklük ilişkisi
 const comparativeNumber = 10;
 if (whatIsThisNumber > comparativeNumber) {
    console.log("ilk girilen sayı büyük");
 }else if( whatIsThisNumber < comparativeNumber) {
    console.log("ilk girilen sayı küçük");
 }else {
    console.log("iki girilen sayı birbirine eşit")
 }
 
