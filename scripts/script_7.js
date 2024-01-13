const newObject = {
  ad: "Deniz",
  soyad: "Zent",
  selamVer: function () {
    console.log("Merhaba");
  },
  kendiniTanit: function () {
    const fullName = this.ad + " " + this.soyad;
    console.log("Merhaba benim adım:", fullName);
  },
  fizikselOzellikler: {
    sacRengi: "siyah",
    boy: 180,
    kilo: 75,
    resitMi: true,
  },
};

console.log(newObject.ad);
console.log(newObject["soyad"]);

newObject.selamVer();
newObject.kendiniTanit();

const objeninKeyleri = Object.keys(newObject);
console.log(objeninKeyleri);

console.log(newObject.fizikselOzellikler);

const uyeler = [];

let uyeOlustur = (adParametresi, soyadParametresi) => {
  return {
    ad: adParametresi,
    soyad: soyadParametresi,
  };
};

uyeler.push(uyeOlustur("John", "Doe"));
uyeler.push(uyeOlustur("Jane", "Doe"));

console.log("Sistemdeki üyeler: ", uyeler);

// Class

class Araba {
  constructor(marka, model) {
    // yapıcı metod
    this.aracMarkasi = marka;
    this.aracModeli = model;
  }

  blgileriGoster() {
    console.log(
      `Aracın markası ${this.aracMarkasi} ve aracın modeli ${this.aracModeli}`
    );
  }
}

let araba1 = new Araba("Toyota", "Corolla");
let araba2 = new Araba("Kia", "Sportage");

araba1.blgileriGoster();
araba2.blgileriGoster();

// OOP (Object Oriented Programming) Principles - Obje Tabanlı Programlama Prensipleri.

// 1- Inheritance (Miras)

class Hayvan {
  constructor(ad) {
    this.ad = ad;
  }

  sesCikart() {
    console.log("Ses çıkartıyor...");
  }
}

class Kedi extends Hayvan {
  constructor(ad, tur) {
    super(ad);
    this.tur = tur;
  }

  miyavla() {
    console.log("Miyav!");
  }
}

let kedi1 = new Kedi("Boncuk", "Tekir");
kedi1.sesCikart();
kedi1.miyavla();

class Uyeler {
  constructor(ad, soyad, mail, sifre) {
    this.ad = ad;
    this.soyad = soyad;
    this.mail = mail;
    this.sifre = sifre;
  }
}

class Yonetici extends Uyeler {
  constructor(ad, soyad, mail, sifre) {
    super(ad, soyad, mail, sifre); // extend edilen Class'ın constructor'ından belirtilen alanları getirir.
  }

  hesapSilme() {
    console.log("Hesap silindi!");
  }
}

class Editor extends Uyeler {
  constructor(ad, soyad, mail, sifre) {
    super(ad, soyad, mail, sifre);
  }
}

const admin1 = new Yonetici("Deniz", "Zent", "test@gmail.com", "12345");
const editor1 = new Editor("John", "Doe", "john@doe.com", "123");

console.log(admin1);
console.log(editor1);

admin1.hesapSilme();

// 2- Polymorphism (Çok Biçimlilik)

class GeometrikSekil {
  constructor() {
    console.log("Geometrik şekil yapıcı metodu çalıştı");
  }

  alanHesapla() {
    console.log("Hata");
  }
}

class Dikdortgen extends GeometrikSekil {
  constructor(uzunluk, genislik) {
    super();
    this.uzunluk = uzunluk;
    this.genislik = genislik;
  }
  alanHesapla() {
    console.log("Dikdörtgenin alanı: ", this.uzunluk * this.genislik);
  }
}

class Daire extends GeometrikSekil {
  constructor(yaricap) {
    super();
    this.yaricap = yaricap;
  }

  alanHesapla() {
    console.log("Dairenin alanı: ", 3.14 * this.yaricap * this.yaricap);
  }
}

function alanHesaplaVeYazdir(geometriksekil) {
  geometriksekil.alanHesapla();
}

const dikdortgen1 = new Dikdortgen(10, 5);
const daire1 = new Daire(5);

console.log(dikdortgen1);
console.log(daire1);

alanHesaplaVeYazdir(dikdortgen1);
alanHesaplaVeYazdir(daire1);

// 3- Encapsulation (Kapsülleme)

class BankaHesabi {
  constructor(iban, hesapNo, bakiye, parola) {
    this.iban = iban;
    this.hesapNo = hesapNo;
    this._bakiye = bakiye;
    this._parola = parola;
  }

  getParola() {
    return this._parola;
  }

  getBakiye() {
    return this._bakiye;
  }

  setParola(yeniParola) {
    this._parola = yeniParola;
  }

  bilgileriGoster() {
    console.log(
      "Hesap bilgileriniz:",
      this.iban,
      this.hesapNo,
      this._bakiye,
      this._parola
    );
  }
}

const garantiHesabim = new BankaHesabi("TR123456313", 134534, 5643, 12345);
console.log(garantiHesabim.getBakiye());
console.log(garantiHesabim.getParola());
garantiHesabim.setParola(9876);

garantiHesabim.bilgileriGoster();