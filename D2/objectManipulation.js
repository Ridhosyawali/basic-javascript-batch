const person = {
  nama: "Danu",
  umur: 30,
  pekerjaan: "fullstuck developer",
  alamat: {
    jalan: "Jl. Raya no.20",
    kota: "Tangerang Selatan",
    negara: "indonesia",
  },
  hobi: ["Olahraga", "Musik", "Membaca"],
};

//Cara mengakses nilai dalam objek menggungakan titik (.)
console.log("nama :", person.nama);
console.log("kota asal :", person.alamat.kota);

//Cara mengakses data array dalam objek
console.log("hobi :", person.hobi[1]);

//Cara mengubah nilai dalam objek
person.umur = 20;
console.log(person);

//Cara menambahkan field baru dalam objek
person.isMarried = false;
console.log(person);

//Cara menghapus field dalam objek
delete person.alamat.jalan;
console.log(person);

//Cara mengakses data object menggunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);
