// DOM - Documents Object Model
console.log(document);

// document.getElementById() ## id'ye göre bir eleman getirir

const h2Elm = document.getElementById("baslik");
console.log(h2Elm);

let imageElm = document.getElementById("random-gorsel");
console.log(imageElm);

const divElm = document.getElementById("selam-ver");
console.log(divElm);

// document.getElementsByClassName() ## class'a göre elemanları getirir, bir Array içerisinde döner.
const ubyElm = document.getElementsByClassName("uby");
console.log(ubyElm[0]);

// document.getElementsByName() ## name'e göre elemanları getirir, bir Array içerisinde döner.
const inputElm = document.getElementsByName("username");
console.log(inputElm);

// document.querySelector() ## id veya class'a ait tek bir elemanı getirir.
const baslikElm = document.querySelector(".uby"); // class'ı ilk uby olan elemanı getirir.
console.log(baslikElm);

// document.querySelectorAll() ##id veya class'a ait elemanları getirir, bir Array içerisinde döner.
const baslikElements = document.querySelectorAll(".uby");
console.log(baslikElements);

//////

baslikElements.forEach((item) => {
  console.log(item);
});

const degisecekElm = document.getElementById("degisecek-metin");
console.log(degisecekElm);

degisecekElm.innerText = "yeni metin";

//////

let degisiklik = document.querySelectorAll(".eleman");
console.log(degisiklik);

degisiklik.forEach((item) => {
    item.innerText = "Değişiklik"
});