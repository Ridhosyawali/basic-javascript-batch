//Array Manipulation
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Deni",
    age: 26,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 8000000 }],
    hobby: ["membaca"],
  },
];

/** Cari karyawan yang punya hobi "menulis" dan usianya diatas 25 tahun */
console.log("============================");
const findHobby = employee.find((data) => {
  return data.hobby.includes("menulis") && data.age > 25;
});
console.log("find : ", findHobby);

/** Tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt .filter dan .some */
console.log("============================");
const filterDataKaryawan = employee.filter((item) => {
  return (
    item.jobDesk.some((job) => job.title === "backend") &&
    item.jobDesk.some((job) => job.salary > 3000000)
  );
});
console.log("filter : ", filterDataKaryawan);

/** tampilkan nama karyawan yang mempunyai satu hobby menggunakan .filter .map .length */
console.log("============================");
const filterNamaKaryawan = employee
  .filter((data) => {
    return data.hobby.length <= 1;
  })
  .map((data) => {
    return data.nama;
  });
console.log("filter maping :", filterNamaKaryawan);

/** cari nama karyawan yang posisinya "frontend" dengan gaji tertinggi, lalu return nama karyawan
 * pake .filter .some .reduce .find
 */
console.log("============================");
const findPosisiKaryawan = employee
  .filter((data) => {
    return data.jobDesk.some((job) => job.title === "frontend");
  })
  .reduce((high, low) => {
    const a = low.jobDesk.map((job) => job.salary)[0];
    return high.y > low.y ? high : low;
  }, 0);

const frontend = employee.find((data) =>
  data.jobDesk.some((item) => findPosisiKaryawan)
).nama;
console.log("karyawan dengan gaji tertinggi :", frontend);

/** MATH
 * Cari nilai tertinggi dari 3 siswa menggunakan math object
 */

console.log("============================");

let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;

console.log("Nilai tertinggi :", Math.max(siswa1, siswa2, siswa3));

// Cari selisih gaji tertinggi dan terendah dari data employe "frontend" menggunakan
// math filter ,math method, spread operator ,map

console.log("============================");

const gajiTertinggi = Math.max(
  ...employee
    .filter((data) => {
      return data.jobDesk.some((job) => job.title === "frontend");
    })
    .map((data) => {
      return data.jobDesk[0].salary;
    })
);

console.log("gaji tertinggi :", gajiTertinggi);

const gajiTerendah = Math.min(
  ...employee
    .filter((data) => {
      return data.jobDesk.some((job) => job.title === "frontend");
    })
    .map((data) => {
      return data.jobDesk[0].salary;
    })
);

console.log("gaji tertinggi :", gajiTerendah);
console.log("selisih gaji :", gajiTertinggi - gajiTerendah);

//KOMBINASI
/** hitung total gaji semua karyawan setelah dipotong pajak 12% pake reduce dan math floor */
console.log("============================");

const gajiPajak = employee.reduce((total, data) => {
  return total + data.jobDesk[0].salary * 0.88;
}, 0);
console.log("total gaji setelah dipotong pajak :", Math.floor(gajiPajak));

/** menampilkan semua nama karyawan yang memiliki hobi terbanyak pake map, math max filter dan length
 * output: [danu,dani]
 * biar rapih pake join(",")=> [danu,dani]*/

const maxHobby = Math.max(...employee.map((data) => data.hobby.length));

const maxKaryawanHobby = employee
  .filter((data) => data.hobby.length === maxHobby)
  .map((item) => item.nama);

console.log("hobi terbanyak :", maxKaryawanHobby);
