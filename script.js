console.log("Hoşgeldiniz");

let firstName ="Ayşe"

let lastName ="Yılmaz";

let age = 29;

let year = 2023;

let birthYear;

console.log("Ad Soyad Yaş:", firstName + " " + lastName + " " + age)

lastName = "Yıldırım";

console.log("Soyad:", lastName);

console.log("Doğum Yılı:", year - age);

birthYear = year - age;

console.log("Ad Soyad Yaş Doğum Yılı:",firstName + " " + lastName+ " " + age+ " " + birthYear);

let sayi4 = 14;
let sayi5 = 10;

let isBigger = sayi4 > sayi5; //Büyüktür işareti: doğruysa "True" olarak gözükür yanlış ise "False" olarak gözükür.

console.log(isBigger);

let isLower = sayi4 < sayi5; //Küçüktür işareti: doğruysa "True" olarak gözükür yanlış ise "False" olarak gözükür.

console.log(isLower);

console.log(sayi4 > 10);

sayi4 = 25;

isBigger = sayi4 > sayi5 && sayi5 > sayi4

console.log(isBigger)

let dateVar = new Date();

console.log(dateVar);

const yearInfo = dateVar.getFullYear();
console.log("Yıl:",yearInfo);

const monthInfo = dateVar.getMonth();
console.log("Ay:",monthInfo);

const dayInfo = dateVar.getDay();
console.log("Gün:",dayInfo);

const hourInfo = dateVar.getHours();
console.log("Saat:",hourInfo);

const minuteInfo = dateVar.getMinutes();
console.log("Dakika:",minuteInfo);

const secondsInfo = dateVar.getSeconds();
console.log("Saniye:",secondsInfo);

const millisecondInfo = dateVar.getMilliseconds();
console.log("Milisaniye:",millisecondInfo);

const timeInfo = dateVar.getTime();
console.log("Toplam Milisaniye:",timeInfo);

const momnetDate = moment();

const formattedDate = momnetDate.format("DD.MM.YYYY HH.mm.ss");
console.log(formattedDate);
