// LOOPS

// ### for loop ###

/*
for(let i = 0; i < 10; i++) {
    console.log("Döngü çalıştı:", i);
};

for(let i= 0; true; i++) {
    console.log("Döngü çalıştı!")

    if(i === 3){
        break;
    }
};


for(let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }

    console.log("Yeni Döngü:", i);
};
*/

// ### while loop ###

/*
let i = 0;

while(i < 10) {
    if (i === 3){
        break;
    }
    console.log("While Döngüsü:", i)
    i++;
};

let j = 0;

do {
    console.log("Do-while Çalıştı:", j);
    j++
} while (j < 10);
*/

let userAge = 0;

while (true) {
  userAge++;
  if (userAge === 18) {
    console.log("Kişi reşittir", userAge);
    break;
  }
}
