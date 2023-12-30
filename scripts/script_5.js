const arrayType = ["Ahmet", "Ayşe", "Mehmet"];
const arrayType2 = [20, 24, 29];
const arrayType3 = [true, false, false];
const arrayType4 = ["Ahmet", 20, false, "Ayşe", 24, false, 29, false, "Mehmet"];

const firstEl = arrayType[0]
const secondEl = arrayType[1]
const thirdEl = arrayType[2]

console.log(arrayType4);

const firstElm = arrayType4[0];
const elCount = arrayType4.length;
const lastEl = arrayType4[elCount - 1];


console.log("Array eleman sayısı:", elCount);
console.log("İlk eleman:", firstElm);
console.log("Sonuncu eleman:", lastEl);

// ### ARRAY METODS ### //

const newArray = []
console.log("newArray", newArray);

// 1. Push (Array'in sonuna yeni bir eleman ekler.)

newArray.push("çilek");
newArray.push("muz", "elma", "karpuz");
console.log("Array güncellendi", newArray);

// 2. Unshift (Array'in başına bir eleman ekler.)

newArray.unshift("üzüm");
console.log(newArray)

// 3. Pop (Array'in sonundaki elemanı kaldırır.)

newArray.pop()
console.log(newArray);

// 4. Shift (Array'in ilk elemanını kaldırır.)

newArray.shift();
console.log(newArray);

// 5. Slice (Array'in bir parçasını kopyalar ve yeni bir array oluşturur.)

const cities = ["İstanbul", "İzmir", "Ankara", "Bursa", "Denizli", "Rize", "Sivas", "Van"];
const newCities = cities.slice(1, 4)
console.log(newCities);

// 6. Splice (Array'de belirli bir aralıktaki elemanları kaldırır ve yerine yeni eleman ekler.)

const student = ["Ahmet", "Mehmet", "Ayşe", "Hatice"];
student.splice(1,2, "Ali", "Fatma");
console.log(student);

// 7. foreach (Array elemanları üzerinde tek tek gezinmemizi ve işlem yapmamızı sağlar.)

const ages = [33, 45, 29, 5, 17, 16, 24, 14, 39, 49, 51];

ages.forEach(function(age){
    console.log(age)
});

// 8. map (Array elemanlarında gezinip belirli bir işlem yapar ve yeni bir Array oluşturur.)

let newAges = ages.map(function(age){
    if(age > 10){
        return age
    }
    else{
        return "Reşit değil"
    }
});

console.log(newAges);

// 9. filter (Belirli koşulu sağlayan elemanları içeren yeni bir Array oluşturur.)

let filteredArray = ages.filter(function(currentAge){
    return currentAge > 18 // şart sağlanırsa currentAge'i Arrey'e ekle sağlanmazsa pas geç.
});

console.log("filtrelenmiş Array: ", filteredArray)