// Penjelasam array secara detail

let myArray = [1, 2, 3, 4, 5];

// Cara akses data dalam array berdasarkan indesknya
let nilaiPertama = myArray[0];
let nilaiKedua = myArray[1];
// dst

console.log("nilai pertama array : ", nilaiPertama);
console.log("nilai kedua array : ", nilaiKedua);

// Ngubah nilai array pada indeks tertentu
myArray[2] = 6;
console.log(`Array setelah diubah : ${myArray}`);

// ARRAY METHOD : metode yang digunakan untuk memanipulasi array

// .push : methid array untuk menambahkan data ke baris akhir array
myArray.push(7); // Nambahin nilai 7 ke baris terakhir
console.log("push : ", myArray);

// .shift : method array untuk menghapus data pertama dari array
myArray.shift();
console.log("shift : ", myArray);

// .unshift : method array untuk menambahkan data ke awal array
myArray.unshift(1, 2);
console.log("unshift : ", myArray);

// .pop : method array untuk menghapus data terakhir dari array
let nilaiTerakhir = myArray.pop();
console.log("Pop : ", nilaiTerakhir);
console.log("Popped array : ", myArray);

// .splice : method array untuk menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log("Splice : ", myArray);

// .slice : method array untuk motong(cut) data dalam array
let slice = myArray.slice(2, 4);
console.log("Slice : ", slice);

// .sort : method array untuk mengurutkan data(ascending) dalam array
myArray.sort();
console.log("sort :", myArray);

// .reverse : method array untuk mengurtkan dari data(descending) dalam array
myArray.reverse();
console.log("reverse :", myArray);

// .indexOf : method array untuk mencari INDEX data dalam array
let nilaiCari = 3;
let indeksNilai = myArray.indexOf(nilaiCari);

if (indeksNilai !== -1) {
  console.log(`NIlai ${nilaiCari} ditemukan pada indeks : ${indeksNilai}`);
} else {
  console.log(`Nilai ${nilaiCari} tidak ditemukan dalam array`);
}

// .concat : method array untuk menggabungkan 2 array

let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);
console.log("concat :", gabungArray);

// .foreach : method array untuk melakukan iterasi/pengulangan pada array
myArray.forEach((i) => {
  console.log("foreach :", i);
});

// .toString : method array untuk mengubah data array menjadi string
console.log("toString :", myArray.toString());

// .toLocaleString : method array untuk mengubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayToLocaleString = price.toLocaleString({
  style: "currency",
  currency: "IDR",
});
console.log("toLocaleString : ", arrayToLocaleString);

// .reduce : method array untuk mengakumulasi nilai array ke dalam satu hasil akhir(mentotalkan data array)
const sum = myArray.reduce((accummulation, currentValue) => {
  console.log(accummulation);
  console.log(currentValue);

  return accummulation + currentValue;
}, 0);
console.log("reduce :", sum);

// Menulis data Array of object

const dataSiswa = [
  {
    Id: 1,
    name: "maman",
    age: 31,
    hobby: ["menggambar", "menari"],
  },
  {
    Id: 2,
    name: "rizky",
    age: 20,
    hobby: ["membaca", "menulis"],
  },
  {
    Id: 3,
    name: "Dina",
    age: 22,
    hobby: ["memasak", "menjahit"],
  },
  {
    Id: 4,
    name: "Denny",
    age: 28,
    hobby: ["menyanyi", "gaming"],
  },
];

// contoh lain Foreach

const forEachDataSiswa = dataSiswa.forEach((data) => {
  console.log("forEach data siswa : ", data.name, data.age <= 26);
});

// .map : method array untuk mengubah setiap elemen array menjadi nilai baru atau maping data tertentu
const getNameFromDataSiswa = dataSiswa.map((item) => {
  return item.name;
});
console.log("mapping data nama :", getNameFromDataSiswa);

// .filter : method array untuk memfilter data array berdasarkan kondisi tertentu
const filterDataSiswa = dataSiswa.filter((item) => {
  return item.age >= 27;
});
console.log("filter data :", filterDataSiswa);

// .find : method array untuk mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
  return data.name === "maman";
});
console.log("find : ", findDataSiswa);

// .length : method array untuk menghitung panjang/jumlah data dalam array
let lengthDataSiswa = dataSiswa.length;
console.log("length : ", lengthDataSiswa);

// .every : method array untuk mengecek apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = dataSiswa.every((item) => {
  return item.age === 25;
});
console.log("every :", everyDataSiswa);
