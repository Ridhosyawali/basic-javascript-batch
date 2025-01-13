// equal(Sama dengan)

let equal = 100;
console.log("=== Equal Operator ===");
console.log(equal == 100); //true
console.log(equal == 90); //false

// not equal(Tidak sama dengan)

let sifat = "rajin";
console.log("=== Not Equal Operator ===");
console.log(sifat != "rajin"); //false
console.log(sifat != "malas"); //true

// strict equal(Sama dengan)
let strictEqual = 10;
console.log("=== Strict Equal Operator ===");
console.log(strictEqual == 10); //true
console.log(strictEqual == "10"); //true kalau menggunakan equal saja
console.log(strictEqual === 10); //true
console.log(strictEqual === "10"); //false

// strict not equal(Tidak sama dengan)
let strictNotEqual = 10;
console.log("=== Strict Not Equal Operator ===");
console.log(strictNotEqual != 10); //false
console.log(strictNotEqual != "10"); //false
console.log(strictNotEqual !== 10); //false
console.log(strictNotEqual !== "10"); //true

// kurang/lebih dari
let angka = 16;
console.log("=== Kurang Lebih Dari Operator ===");
console.log(angka > 10); //true
console.log(angka < 10); //false
console.log(angka >= 16); //true
console.log(angka <= 10); //false

// operator kondisionial OR (Menghasilkan nilai true jika ada salah satu operasi true)
console.log("=== OR Operator ===");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(false || false || false || true); //true
let firstName = null;
let lastName = "Dwi";
console.log(firstName || lastName); //Rizky
console.log(firstName && lastName); //Rizky

// operator kondisional AND (Menghasilkan nilai true jika semua operasi true)
console.log("=== AND Operator ===");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true && true && false && true); //false

let firstName2 = "Rizky";
let lastName2 = null;
let age2 = 20;
let noJob = false;
console.log(age2 && noJob); //false
console.log(firstName2 && lastName2); //null

let user = {
  name: "Ridho",
  age: 20,
  address: {
    city: "Jakarta",
    country: "indonesia",
  },
};

let country = user && user.address && user.address.country;
console.log(country);

function findUserCountry(user) {
  let country = user && user.address && user.address.country;
  return country || "Data tidak ditemukan";
}
console.log(findUserCountry(user));
