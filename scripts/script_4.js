function consolaYazdir() {
  console.log("Fonksiyon çalıştı ve console'a yazıldı!");
}

const consolaYazdir2 = () => {
  console.log("Arrow fucntion çalıştı!");
};

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
