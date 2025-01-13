// variabel : tempat menyimpan data

let name = "Rizky";
var umur = 20;
const isLoading = false;

//tipe data : jenis data yang bisa disimpan dalam variable
//tipe data primitif = tipe data tunggal

//string = data yang dibungkus kutip
let namaKaryawan = "Danu";
console.log("nama Karyawan :", namaKaryawan);

// int : tipe data khusus angka
const salary = 1000000;
console.log("gaji :", salary);

// boolean : tipe data yang mengandung nilai kebenaran true/false
const isMarried = true;
console.log("apakah sudah menikah :", isMarried);

let isTeacher = false;
console.log("apakah seorang guru :", isTeacher);

// null : tipe data kosong
const hisChild = null;
console.log("anak :", hisChild);

// undefined : tipe data tidak terdefinisi
let wife;
wife = "Dewi";
console.log("istri :", wife);

// variable data let datanya bisa diubah sedangkan variable const datanya tetap (tidak bisa diubah)
// aturan penulisan variable wajib menggunakan camelCase(kata pertama kecil dan kata kedua dengan huruf besar)

// tipe data non-primitif = tipe data yang memiliki data di dalamnya
// object = tipe data yang memiliki kumpulan data di dalamnya
let karyawan = {
  nama: namaKaryawan,
  salary: 2000000,
  job: "fullstack",
};

console.log("data karyawan :", karyawan);
console.log("data karyawan :", karyawan.job); //gunakan .(titik) untuk mengakses data di dalam object

// array = tipe data yang memiliki kumpulan data di dalamnya
let daftarKaryawan = ["Danu", "Dewi", "Rizky"];
console.log("list karyawan :", daftarKaryawan);
console.log("list karyawan :", daftarKaryawan[1]); //gunakan index [] untuk mengakses data di dalam array

// array of object = tipe data yang memiliki kumpulan data object di dalamnya
let dataKaryawan2 = [
  {
    nama: "Danu",
    job: "fullstack",
  },
  {
    nama: "Dewi",
    job: "fullstack",
  },
  {
    nama: "Rizky",
    job: "fullstack",
  },
];
console.log("data karyawan :", dataKaryawan2);
console.log("nama karyawan :", dataKaryawan2[1].nama);
