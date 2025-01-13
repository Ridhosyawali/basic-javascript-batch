let a, b, c;

a = 10;
b = 5;
c = 2;

let penjumlahan = a + b + c;
let pengurangan = a - b - c;
let perkalian = a * b * c;
let pembagian = a / b / c;
let modulus = (a % b) % c;
let kurangKaliBagi = penjumlahan - a * b * c - a / b / c;
let total =
  penjumlahan + pengurangan + perkalian + pembagian + modulus + kurangKaliBagi;

console.log("===========================");
console.log("====== Ridho Syawali ======");
console.log("===========================");

console.log("X =", a);
console.log("Y =", b);
console.log("Z =", c);

console.log("Penjumlahan = ", penjumlahan);
console.log("Pengurangan = ", pengurangan);
console.log("Perkalian = ", perkalian);
console.log("Pembagian = ", pembagian);
console.log("Modulus = ", modulus);
console.log("jumlah-kali-bagi =", kurangKaliBagi);
console.log("total = ", total);
console.log("===========================");

// soal 2 : hitung berapa detik dalam 30 hari menggunakan operator matematika
let detik = 30 * 24 * 60 * 60;
console.log(detik, "detik");

// soal 3 : cari hobby didalam data yang dikirim dari parameter user
// jika objek user atau properti hobby tidak ditemukan maka return "Hobby tidak ada"

let user1 = {
  name: "owi kun",
  age: 20,
  hobby: ["membaca", "menulis"],
};
let user2 = {
  name: "mega chan",
  age: 25,
};

function findUserHobby(user1) {
  let hobby = user1.hobby || "Hobby tidak ada";
  return hobby;
}

function findUserHobby(user2) {
  let hobby = user2.hobby || "Hobby tidak ada";
  return hobby;
}

console.log(findUserHobby(user1));
console.log(findUserHobby(user2));

// LOGIC
/** soal 4 : buat logic switch case untuk menampilkan nama hari menggunakan bahasa inggris berdasarkan
 * input angka 1-7 jika angka yang dimasukkan diluar rentang tersebut, maka tampilkan pesan input tidak valid
 *  */

let day = 4;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Input tidak valid");
    break;
  }
}

/** soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
 * jika nilai lebih dari atau sama dengan 80, maka statusnya "Anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70, dan kurang dari 80, maka statusnya "Lulus dengan baik,
 * jika nilai lebih dari atau sama dengan 60, dan kurang dari 70, maka statusnya lulus,
 * jika nilai kurang dari 60, maka statusnya "Tidak lulus"
 */

let nilai = 79;

if (nilai >= 80) {
  console.log("Anda lulus dengan sangat baik");
} else if (nilai >= 70) {
  console.log("Lulus dengan baik");
} else if (nilai >= 60) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}

/** soal 6 : buat logic untuk menentukan nilai rata rata siswa dengan menghitung nilai rata rata
 * dari 3 MAPEL (MTK,FISIKA, KIMIA)
 * jika nilai yang dimasukkan tidak valid (diluar rentang 0-100), maka statusnya "Nilai tidak valid
 * jika nilai rata rata lebih besar atau sama dengan 80, maka statusnya "Selamat anda lulus dengan baik"
 * jika nilai rata rata lebih kecil dari 80 dan lebih besar atau sama dengan 60, maka statusnya "Anda lulus"
 * jika nilai rata rata lebih kecil dari 60, maka statusnya "Anda tidak lulus" */

let mtk = 80;
let fisika = 70;
let kimia = 60;

let rataRata = (mtk + fisika + kimia) / 3;
console.log(rataRata);

if (rataRata <= 100) {
  if (rataRata >= 80) {
    console.log("Selamat anda lulus dengan baik");
  } else if (rataRata >= 60) {
    console.log("Anda lulus");
  } else {
    console.log("Anda tidak lulus");
  }
} else {
  console.log("Nilai tidak valid");
}

/** soal 7 : buat logic untuk menentukan jenis bilangan (positif, negatif, atau nol)
 * dari nilai yang dimasukkan oleh user menggunakan ternary operator
 * output yang diharapkan : ("Angka 7 adalah bilangan positif")
 */

let angka = 0;

let result =
  angka > 0
    ? `Angka ${angka} adalah bilangan positif`
    : angka < 0
    ? `Angka ${angka} adalah bilangan negatif`
    : `Angka ${angka} adalah bilangan nol`;
console.log(result);

/** soal 8 : nested if
 * buat program untuk menghitung total harga pembelian barang pake nested if
 * jika total harga sama dengan 0 maka tampilkan pesan "harga tidak valid"
 * jika total pembelian melebihi atau sama dengan 1 juta, maka berikan diskon sebesar 10%
 * sedangkan jika total pembelian melebihi atau sama dengan 500 ribu maka diberikan diskon sebesat 5%
 * jika dibawah dari 500 ribu tidak diberikan diskon.
 *
 * tampilkan pesan berikut:
 * anda membeli <jumlah barang> <namabarang> dengan harga <hargabarang> per-<namabarang>, total harga sebelum diskon = <totalHarga>
 * lalu cek, jika dapat diskon maka tampilkan "selamat anda mendapatkan diskon sebesar <diskon>%"
 * harga setelah diskon = <hargaSetelahDiskon>
 * jika tidak dapat diskon, tampilkan pesan "anda belum dapat diskon, harga total = <hargasetelah diskon>"
 */

let barang = "sabun";
let harga = 10020;
let jumlah = 72;

let totalHarga = harga * jumlah;
let diskon10 = totalHarga * 0.1;
let diskon5 = totalHarga * 0.05;

console.log("============STRUK BELANJA===============");
console.log(`anda membeli ${jumlah} ${barang}`);
console.log(`dengan harga ${harga} per-${barang}`);
console.log(`total harga sebelum diskon = ${totalHarga}`);

if (totalHarga >= 0) {
  if (totalHarga >= 1000000) {
    console.log(`Selamat anda mendapatkan diskon sebesar 10%`);
    console.log(`harga setelah diskon = ${diskon10}`);
  } else if (totalHarga >= 500000) {
    console.log(`Selamat anda mendapatkan diskon sebesar 5%`);
    console.log(`harga setelah diskon = ${diskon5}`);
  } else {
    console.log(`Anda belum dapat diskon`);
    console.log(`harga total = ${totalHarga}`);
  }
} else {
  console.log("Harga tidak valid");
}

/** soal 9 : For Loop
 * buat program untuk mencari bilangan prima dari 1-25 menggunakan for loop
 */

for (let i = 1; i <= 25; i++) {
  let prima = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      prima = false;
      break;
    }
  }
  if (prima == true) {
    console.log(i);
  }
}

/** soal 10 : for loop
 * buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
 */

const dataBilanganBulat = [2, 4, 6, 8, 10];

function rata(dataBilanganBulat) {
  let total = 0;
  for (let i = 0; i < dataBilanganBulat.length; i++) {
    total += dataBilanganBulat[i];
  }
  return total / dataBilanganBulat.length;
}
console.log("Rata rata data bilangan bulat", rata(dataBilanganBulat));

/** soal 11: for loop
 * buat function untuk menghitung jumlah huruf kapital pada sebuah string
 */
let string1 = "Hello World";
let string2 = "Kiw, GImana Kabarnya?";
let string3 = "JAVaScRipT";

/** soal 12 : for loop
 * buat fungsi untuk mencari nilai tertinggi dari sebuah array
 */
const nilaiTertinggi = [1, 34, 21, 54, 6567, 234, 65865, 98764, 23, 453];

function biggestNumber(nilaiTertinggi) {
  let largest = nilaiTertinggi[0];
  let number = 0;
  for (let i = 0; i < nilaiTertinggi.length; i++) {
    number = nilaiTertinggi[i];
    largest = Math.max(largest, number);
  }
  return largest;
}
console.log(biggestNumber(nilaiTertinggi));

/** soal 13: for
 * buat fungsi untuk membuat piramida(segitiga sama kaki) yang terbuat dari bintang "*"
 * dengan jumlah baris yang bisa ditentukan oleh user melalui parameter fungsi
 */

function piramida(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
