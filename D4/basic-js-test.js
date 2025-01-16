const fs = require("fs");

const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */

console.log("========= SOAL 1 =========");

const maxPrice = carProducts.reduce((prev, next) => {
  let hargaTertinggi = Math.max(prev.price, next.price);
  return hargaTertinggi === prev.price ? prev : next;
});

const minPrice = carProducts.reduce((prev, next) => {
  let hargaTerendah = Math.min(prev.price, next.price);
  return hargaTerendah === prev.price ? prev : next;
});

console.log("Mobil dengan harga tertinggi adalah", maxPrice);

console.log("Mobil dengan harga terendah adalah", minPrice);

/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
 */

console.log("========= SOAL 2 =========");

const filterPromo = carProducts.filter((data) =>
  data.tag.some((tag) => tag === "Promo")
);

console.log("Menampilkan data mobil dengan tag Promo :", filterPromo);
/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */

console.log("========= SOAL 3 =========");

const sortCar = carProducts.sort((a, b) => {
  if (a.price === null) return 1;
  if (b.price === null) return -1;
  return b.price - a.price;
});

console.log("Menampilkan data mobil dari harga tertinggi ke rendah", sortCar);

console.log("Menampilkan data mobil dari harga tertinggi ke rendah", sortCar);

/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */

console.log("========= SOAL 4 =========");

const engine = carProducts.filter((data) => data.variant[0].type === "engine");
const hybrid = carProducts.filter((data) => data.variant[0].type === "hybrid");
const electric = carProducts.filter(
  (data) => data.variant[0].type === "electric"
);

console.log("Menampilkan engine :", engine);
console.log("Menampilkan hybrid :", hybrid);
console.log("Menampilkan electric :", electric);

/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */

console.log("========= SOAL 5 =========");
//membuat file

function readFile() {
  try {
    const data = fs.readFileSync("./carProducts.json", "utf-8");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const fileData = JSON.parse(readFile());

const sortCarPrice = fileData.sort((a, b) => {
  if (a.price === null) return 1;
  if (b.price === null) return -1;
  return b.price - a.price;
});

function createFile() {
  try {
    fs.writeFileSync(
      "./carProducts.json",
      JSON.stringify(sortCarPrice, null, 2),
      "utf-8"
    );
    console.log("data berhasil disimpan");
  } catch (error) {
    console.log(error);
  }
}
createFile();
console.log(sortCarPrice);

/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 */

console.log("========= SOAL 6 =========");

const newCar = {
  id: 8,
  name: "Beat Esp 110 Second",
  price: 7500000,
  tag: ["Produk Terlaris", "Bekas"],
  variant: [
    {
      color: "black",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "navy",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "white",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
  ],
};

const newCarJson = JSON.stringify([...fileData, newCar], null, 2);

function createFileNewCar() {
  try {
    fs.writeFileSync("./addNewCarProducts.json", newCarJson, "utf-8");
    console.log("data berhasil disimpan");
  } catch (error) {
    console.log(error);
  }
}
createFileNewCar();

/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */
console.log("========= SOAL 7 =========");

async function getPriceDifferent() {
  try {
    const maxPrice = fileData.reduce((prev, next) => {
      if (next.price === null) return prev;
      return next.price > prev.price ? next : prev;
    });

    console.log("harga tertingginya :", maxPrice.price);

    const minPrice = fileData.reduce((prev, next) => {
      if (next.price === null) return prev;
      return next.price < prev.price ? next : prev;
    });

    console.log("harga terendahnya :", minPrice.price);

    const differentPrice = maxPrice.price - minPrice.price;
    console.log("Selisih harga tertinggi dan terendah adalah", differentPrice);
  } catch (error) {
    console.log(error);
    return error;
  }
}

getPriceDifferent();

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */
console.log("========= SOAL 8 =========");

function getMaxColor() {
  const maxColor = fileData.reduce((prev, next) => {
    if (next.variant[0].color === null) return prev;
    return next.variant[0].color > prev.variant[0].color ? next : prev;
  });
  console.log("Mobil dengan warna terbanyak adalah", maxColor.variant[0].color);
  return maxColor;
}

getMaxColor();

/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
 */

console.log("========= SOAL 9 =========");

function checkPreorder() {
  const preorder = fileData.filter((data) => data.isPreorder === false);
  console.log(preorder);
}

// checkPreorder();

/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */
const pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let k = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      j >= n + 1 - i && j <= n - 1 + i ? (k += "*") : (k += " ");
    }
    console.log(k);
  }
};
pyramid(5);

/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */

console.log("========= SOAL 11 =========");

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

// CREATE

console.log("CREATE");

employee.push({
  id: 5,
  nama: "rahmad",
  age: 24,
  jobDesk: [{ title: "backend", salary: 700000 }],
  hobby: ["menulis"],
});
console.table("Create Data", employee);

// READ
console.log("READ");

console.table(employee);

//Update
console.log("Update");

employee[2].nama = "Rafi";
console.table(employee);

// delete

let deleteData = employee.slice(0, 3);
console.table(deleteData);
