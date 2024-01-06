function consolaYazdir() {
  console.log("Fonksiyon çalıştı ve console'a yazıldı!");
}

// Arrow-Function

const consolaYazdir2 = () => {
  console.log("Arrow fucntion çalıştı!");
};

//

function consolaYazdir3(parameter1, parameter2) {
  console.log("Hava durumu:", parameter1);
  console.log("Hava sıcaklığı:", parameter2);
}

consolaYazdir();
consolaYazdir2();

consolaYazdir3("Rainy", 11);

function toplamaIslemi(sayi1, sayi2) {
  const toplam = sayi1 + sayi2;
  console.log("Sayıların toplamı", toplam);
}

toplamaIslemi(150, 55);

function I(A, B) {
  const sonuc = A / B;
  console.log("Bölme işleminin sonucu:", sonuc);
}

I(100, 25);

const myFunction = function (...param) {
  console.log(param);
};

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

let x;
let z;
let y;

function myFunction1(param1) {
  x = param1;
  console.log("x'in değeri:", x);
}

function myFunction2(param2) {
  z = param2;
  console.log("z'nin değeri:", z);
}

function myFunction3(param3) {
  y = param3;
  console.log("y'nin değeri:", y);
}

myFunction1(10);
myFunction2(20);
myFunction3(30);

console.log("Fonksiyonlar toplamı:", x + y + z);

// Nested Function

const myNestFunction = () => {
  const number1 = 2;
  const number2 = 5;

  function toplama() {
    console.log("toplama sonucu", number1 + number2);
  }
};

myNestFunction();

// Return - Example (1)

function returnMyName() {
  return "Deniz";
}

const myName = returnMyName();
console.log("myName:", myName);

// Return - Example (2)

let bolmeSonucu;

const bolmeIslemi = (sayi1, sayi2) => {
  return sayi1 / sayi2;
};

bolmeSonucu = bolmeIslemi(20, 5);
console.log("bolmeSonucu değişkeni", bolmeSonucu);

// Return - Example (3)

function currencyCalculator(turkishLira) {
  return turkishLira / 30;
}

const dollarType = currencyCalculator(60);
console.log(dollarType);

// Recursive(Loop) Function
/*

let startPoint = 1;

function loop(breakPoint) {
  console.log("Recursive fonksiyon çalıştı", startPoint);
  startPoint++;
  if (startPoint > breakPoint) {
    return;
  }
  loop(20);
}

loop(20);

*/
// Callback Function

const callBackExample = (num1, num2, callback) => {
  let sonuc = num1 + num2;
  callback(sonuc);
};

function callBackFunc(sonuc) {
  console.log("Toplama sonucu:", sonuc);
}

callBackExample(10, 20, callBackFunc);

export default function exportMyFunction() {
  console.log("Bu fonksiyonu başka dosyada çağıracağım");
}
