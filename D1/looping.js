// Looping : perulangan yang bertujuan untuk memeriksa data untuk kondisi tertentu
// WHILE LOOP
let startCondition = 1; // nilai awal perulangan
while (startCondition < 5) {
  console.log("While loop ke-", startCondition); //output
  startCondition++; //increment : menambahkan 1 ke nilai startCondition hingga memenuhi kondisi
}

// FOR LOOP
/** let i =  : kondisi awal perulangan
 * i < 5 : stop condition
 * i++ : increment
 */
for (let i = 0; i < 5; i++) {
  console.log("For loop ke-", i);
}

let array = [1, 2, 3, 4, 5];
for (let i of array) {
  console.log("loop ke-", i);
}

let hitung = 0;
let i = 0;
//contoh lain while
while (i < array.length) {
  if (array[i] > 3) {
    hitung++;
  }
  i++;
}
console.log(`jumlah elemen yang lebih besar dari 3 : ${hitung}`);

// contoh while untuk mencari bilangan prima

let n = 20;
let prima = 2;

while (prima <= n) {
  let isPrime = true;
  let j = 2;

  while (j < prima) {
    // selama nilai j kurang dari prima, eksekusi blok dibawah ini
    if (prima % j === 0) {
      // jika prima dapat dibagi oleh j, maka bukan bilangan prima
      isPrime = false; //ubah nilai isPrime menjadi false
      break; //berhenti looping
    }
    j++;
  }

  if (isPrime) {
    // jika isPrime true, maka prima adalah bilangan prima
    console.log(prima);
  }
  prima++;
}

// ForEach : perulangan khusus data array, foreach sendiri merupakan method bawaan dari array(array method)
array.forEach((i) => {
  console.log("foreach :", i);
});
