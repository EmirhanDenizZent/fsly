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

// indexOf (Array'deki bir elemanınızın hangi index sırasında oldugunu söyler.)

const arr = ["elma", "armut", "çilek", "muz"];
let armutİndex = arr.indexOf("armut");
console.log("Armut elemanının index sayısı", armutİndex);

arr[armutİndex] = "üzüm";
console.log(arr);

const kayısıİndex = arr.indexOf("kayısı");
// Eğer array'de olmayan bir eleman ise bu method -1 sonucunu dönecektir

// İncludes (Array'de bir elemanın olup olmadığını kontrol eder ==> boolean)

const armutExists = arr.includes("armut");
console.log("Bu array'de armut elemanı var mı?: ", armutExists);

let muzExists = arr.includes("muz");
console.log("Bu array'de muz elemanı var mı?: ", muzExists);

// reverse (Array'i tersine çevirir.)
const reverseArr = arr.reverse();
console.log(reverseArr);

// join (Array'i birleştirip bir string haline getirir.)

const stringedArr = arr.join()
console.log("Array stringe çevrildi: ", stringedArr, typeof stringedArr);

const _stringedArr = arr.join("+")
console.log("Elemanlar + ile ayrılmış olacak", _stringedArr);

// split (Bir stringi Array'e çevirir.)

const str = "Bugün hava güneşli";
const arrStr = str.split(" ");
console.log("String elemana çevrildi ", arrStr);

// concat (İki array'i birleştirmek için kullanılır.)
const arr1 = [5, 10, 15, 20, 25, 30];
const arr2 = [35, 40, 45,50 ,55 ,65 ,70 ,75 ,80];

const nergedArray = arr1.concat([40, 45, 50]);
console.log("Örnek 1: nerged array ", nergedArray);

const _nergedArray = arr1.concat([arr2]);
console.log("Örnek 2: _nerged array ", _nergedArray);

// reduce (Arrayde'ki elemanlardan tek bir değer üretir.)

const nums = [5, 43, 44, 50, 51, 90];

let sum = nums.reduce(function(acc, current) {
    return acc + current // acc = acc + current gibi düşünülebilir. return, her iterasyonda acc'nin yeni değerini günceller
}, 0); // acc'nin başlangıç değeri sıfırdır (const acc = 0; gibi düşünülebilir)

console.log("Toplam: ", sum);
console.log("Ortalama: ", sum / nums.length);

// sort (Arrayde'ki elemanları sıralamanızı sağlar)

const newArr = ["elma", "armut", "kivi", "muz"];
newArr.sort(); // Her hangi bir parametre girilmezse string arrayleri arasında alfabetik sıralama yapar.

console.log(newArr);

const _newArr = [3, 11, 23, 6, 44, 22];
_newArr.sort(function(a, b){
    return a - b
});

console.log("Küçükten büyüğe sırala: ", _newArr);

_newArr.sort(function(a, b){
    return b - a
});

console.log("Büyükten küçüğe sırala: ", _newArr);