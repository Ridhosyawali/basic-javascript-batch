/** Soal 1:
 * buat perintah untuk membaca file JSON bernama employee.json yang berisi data JSON
 * dan tapilin semua nama karyawan
 */
console.log("==== soal 1 =====");

const fs = require("fs");

const file = fs.readFileSync("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  return data;
});

const getName = JSON.parse(file);

getName.forEach((data) => {
  console.log(data.nama);
});

/** Soal 2 :
 * buat perintah untuk menambahkan minimal 1 data JSON kedalam file bernama employee.json
 * readfile & replace pake writeFile
 */

console.log("==== soal 2 =====");

const dataBaru = {
  id: 6,
  nama: "dani",
  jobDesk: [
    {
      title: "frontend",
      salary: 50000,
    },
  ],
  usia: 25,
  hobby: ["membaca", "menggambar"],
};

const dataBaruJson = JSON.stringify([...getName, dataBaru], null, 2);

// fs.writeFile("./employee.json", dataBaruJson, "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   console.log("data berhasil ditambahkan");
// });

/** Soal 3 :
 * buat perintah untuk nyari karyawan yang usianya diatas atau sama dengan 26
 * dan simpan datanya kedalam file baru bernama karyawan_tuwir.json
 * readfile&writeFile
 */

console.log("==== soal 3 =====");

const tuwir = getName.filter((data) => data.age >= 26);
const tuwirJson = JSON.stringify(tuwir, null, 2);

// fs.writeFile("./karyawan_tuwir.json", tuwirJson, "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   console.log("data berhasil disimpan");
// });

/** Soal 4 :
 * buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahan datanya di file baru bernama deleted_data
 * readfile & writefile
 */

console.log("==== soal 4 ====");

const deleteData = getName.filter((data) => data.id !== 1);
const deleteJson = JSON.stringify(deleteData, null, 2);

fs.writeFile("./delete_data.json", deleteJson, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data berhasil disimpan");
});
