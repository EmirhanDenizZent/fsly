// İf Else Yapısı.

let condition = 25 > 5;

if (condition && 10 < 15) {
  console.log("Şart doğrudur");
} else {
  console.log("Şart yanlıştır");
}

if (5 === "5") {
  console.log("Evet-1");
} else if (5 === "6") {
  console.log("Evet-2");
} else if (5 === 5) {
  console.log("Evet-3");
} else {
  console.log("Hayır");
}

/*
if(5 === "5" ) console.log("Evet-1");
else if(5 === "6") console.log("Evet-2");
else if(5 === 5) console.log("Evet-3");
else console.log("Hayır");
*/

/*
if ("a" == "b") {
    console.log(Yazılar aynı);
} else {
    console.log(Yazılar farklı);
}
*/

"a" == "b" ? console.log("Yazılar aynı") : console.log("Yazılar farklı");

/*
if(5 > 2 ) {
    console.log("Çalıştı");
}
*/

5 > 2 && console.log("Çalıştı");

// Switch-Case

//const todaysDate = new Date().getDay();

const todaysDate = 3;
console.log("Gün:", todaysDate);

let dayOfWeek;

/*
if(todaysDate == 0) {
    dayOfWeek = "Pazar";
} else if(todaysDate == 1) {
    dayOfWeek = "Pazartesi";
} else if(todaysDate == 2) {
    dayOfWeek = "Salı";
} else if(todaysDate == 3) {
    dayOfWeek = "Çarşamba";
} else if(todaysDate == 4) {
    dayOfWeek = "Perşembe";
} else if(todaysDate == 5) {
    dayOfWeek = "Cuma";
} else if(todaysDate == 6) {
    dayOfWeek = "Cumartesi";
}

console.log("Bugün günlerden:", dayOfWeek)

*/

switch (todaysDate) {
  case 0:
    dayOfWeek = "Pazar";
    break;
  case 1:
    dayOfWeek = "Pazartesi";
    break;
  case 2:
    dayOfWeek = "Salı";
    break;
  case 3:
    dayOfWeek = "Çarşamba";
    break;
  case 4:
    dayOfWeek = "Perşembe";
    break;
  case 5:
    dayOfWeek = "Cuma";
    break;
  case 6:
    dayOfWeek = "Cumartesi";
    break;
  default:
    dayOfWeek = "Gün değeri alınamadı";
    break;
}

console.log(dayOfWeek);
