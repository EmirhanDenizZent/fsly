// Objeler key-value sistemine göre oluşturulur.

const student1 = {
  firstName: "Mehmet", // Bu satıra field adı verilir. firstName key "Mehmet" ise value olarak adlandırılır.
  lastName: "Yılmaz",
  no: 120,
  isGraduate: false,
};

console.log(student1);

const student2 = {
  firstName: "John",
  lastName: "Doe",
  no: 58,
  isGraduate: true,
};

console.log(student2);

const firstNameStudent2 = student2.firstName;
console.log(firstNameStudent2);
console.log(student2.lastName);

// JSON - Javascript Object Notation

const carsArray = [
  {
    model: "Mercedes",
    year: 2019,
  },
  {
    model: "Renault",
    year: 2022,
  },
  {
    model: "Peugeot",
    year: 2011,
  },
];

console.log(carsArray);

carsArray.map((car) => {
  console.log(car.model);
});

const carObject = {
  year: 2022,
  brand: "Toyota",
  model: "Corolla",
};

const isModelKeyExists = Object.hasOwn(carsArray, "model");
console.log("carsArray objesinde model key'i var mı?: ", isModelKeyExists);

const isBrandKeyExists = Object.hasOwn(carObject, "brand");
console.log("carObject objesinde brand key'i var mı?: ", isBrandKeyExists);

// Eğer for döngüsü objelere uygulanırsa bize bu objenin key'lerini dönecektir.
for (const currentProperty in carObject) {
  console.log(
    "Objenin key'i:",
    currentProperty,
    " ve bu key'in değeri ",
    carObject[currentProperty]
  );
}

// Objenin keylerini bir array içerisinde elde etmek için Object.keys() metodu kullanılır.
const keysOfObject = Object.keys(carObject);
console.log("Objenin keyleri: ", keysOfObject);

//
const valuesOfObject = Object.values(carObject);
console.log("Objenin value'ları ", valuesOfObject);

// Objenin field'larını ayrı ayrı bir Array içerisinde yine bir Array olarak tutar.
const entries = Object.entries(carObject);
console.log("Objenin field'ları: ", entries);

carObject.color = "Gray";
console.log("Objeye color field'ı eklendi: ", carObject);

delete carObject.color;
console.log("Objeden color field'ı silindi: ", carObject);

function unlock(password) {
  if (password === 1234) {
    console.log("Şifre doğru");
  } else {
    console.log("Şifre yanlış");
  }
}

unlock(1234);

let studentsArr = [
  {
    name: "alex",
    lastName: "Doe",
    age: 22,
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 21,
  },
];

console.log("Öğrenciler", studentsArr);

// CONSTRUCTOR FUNCTION - YAPICI METOD

function createStudent(name, lastName, age) {
  return {
    ad: name,
    soyad: lastName,
    yas: age,
  };
}
const student3 = createStudent("Deniz", "Zent", 18);


function createCar(model, color, year) {
  return {
    model, // model: model, şeklinde yazmak yerine tek model yazarak daha temiz yapı oluştururlur.
    color,
    year,
  };
}

const car1 = createCar("Volvo", "Siyah", 2005);
let car2 = createCar("Tofaş", "Beyaz", 2000);
const car3 = createCar("BMW", "Turuncu", 2018);

console.log(car1, car2, car3);

// SPREAD SYNTAX (...)

const object1 = {name: "Lorem", number: 20}
const object2 = {name: "Ipsum", number: 25}

const object3 = {...object1}; // Objeleri kopyalamak için kullanılan operator.