// function : blok kode javascript yang mengerjakana perintah/fungsi tertentu
// rumus fungsi biasa : function namaFunction(parameter/non-params) { }
//arrow fungsi : const namaFunction = (params/non-params) => {}

//contoh fungsi tanpa parameter

function printName() {
  console.log("Rizky");
}

printName(); // <= fungsi dipanggil/dijalankan

//contoh fungsi dengan parameter
// parameter : sebutan untuk variabel di dalam fungsi
/** fungsi biasanya punya return buat mengembalikan nilai dari hasil fungsi tersebut */

function penjumlahan(a, b) {
  let jumlah = a + b;
  return jumlah;
}

console.log(penjumlahan(10, 2));

//return juga bisa untuk memberhentikan eksekusi program lebih awal jika diperlukan
function cekAngkaPositif(angka) {
  if (angka < 0) {
    return "Angka Negatif";
  } else {
    return "Angka Positif";
  }
}

console.log(cekAngkaPositif(-10));
console.log(cekAngkaPositif(15));

// arrow function
const kaliDua = (a) => {
  return a * 2;
};

console.log(kaliDua(5));
