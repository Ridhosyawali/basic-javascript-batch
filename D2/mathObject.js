// Math object : method untuk operasi matematika
let angkaAcak = Math.random();
console.log(angkaAcak);

//nampilin angka acak dari 1-10 dan dibulatkan kebawah
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));

// Math.floor : untuk membulatkan angka kebawah
console.log("Math floor :", Math.floor(3.65));

// Math.ceil : untuk membulatkan angka keatas
console.log("Math ceil :", Math.ceil(3.65));

// Math.round : untuk membulatkan angka terdekat
console.log("Math round :", Math.round(3.5));

// Math.max : untuk mencari angka tertinggi
console.log("Math max :", Math.max(12, 23, 54, 2, 65, 43));

// Math.min : untuk mencari angka terkecil
console.log("Math min :", Math.min(12, 23, 54, 2, 65, 43));

// Math.sqrt untuk menghitung angka kuadrat
console.log("Math sqrt :", Math.sqrt(16));

// Math.pow untuk menghitung angka pangkat
console.log("Math pow :", Math.pow(2, 3));

// Math.PI buat nilai pi
console.log("Math pi :", Math.PI);

let luasLingkaran = Math.PI * Math.pow(5, 2);
console.log(luasLingkaran);
console.log(Math.floor(luasLingkaran)); // dibulatkan ke yang terkecil
