// DOM - Documents Object Model
console.log(document);

// document.getElementById() ## id'ye göre bir eleman getirir

const h2Elm = document.getElementById("baslik");
console.log(h2Elm);

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
  item.innerText = "Değişiklik";
});

// setTimeOut metodu: Bir fonksiyonu çalışmasını belirli bir zaman kadar ötelemek için kullanılır.

function sayHello() {
  console.log("Hello World!");
}

// sayHello(); Doğrudan çağırılırsa fonksiyon hemen çalışacaktır.

setTimeout(sayHello, 5000); // ilk parametre çalışacak fonksiyon, ikinci parametre ise ne kadar süre sonra çalışacağıdır.
//Bu süre milisaniye olmalıdır. (1 saniye = 1000 milisaniye)

// setIntervel metodu: Bir fonksiyonu belirli bir periyodlarda sürekli çalıştırmayı sağlar. Örneğin fonksiyonumuzun her 5 saniyede bir çalışması gibi

// setInterval(function(){
//   console.log("Her 6 saniyede bir çalıştım");
// }, 6000);

let i = 0;

const degeriGüncelle = () => {
  i++;
  console.log("i değeri güncellendi: ", i);
  if (i === 5) {
    clearInterval(sürekliCalis); // interval'ın çalışmasını sonlandırır
  }
};

const sürekliCalis = setInterval(degeriGüncelle, 3000);

// DOM elemanları arasında geçiş (parent/sibling/child)

const alinacakUrunEl = document.getElementById("alinacak-urun");
console.log(alinacakUrunEl);

console.log(alinacakUrunEl.parentNode); // bu yaklaşımla seçilmiş elemanın parent'ı elde edilebilir.
console.log(alinacakUrunEl.childNodes); // bu yaklaşımla seçilmiş elemanın child'ı elde edilebilir.
console.log(alinacakUrunEl.nextElementSibling);
console.log(alinacakUrunEl.previousElementSibling);