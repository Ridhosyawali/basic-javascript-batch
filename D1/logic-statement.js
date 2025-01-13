// SWITCH CASE : kondisi untuk menampilkan output berdasarkan nilai tertentu

let remoteButton = 1;

switch (remoteButton) {
  case 1: {
    console.log("Turn On");
    break;
  }
  case 2: {
    console.log("Turn Off");
    break;
  }

  default: {
    console.log("Error");
    break;
  }
}

// IF STATEMENT : if(kondisi){output}
let nilai = 100;

if (nilai == 100) {
  console.log("Nilai A");
}

// IF ELSE statement : if(kondisi){output} else{output}

if (nilai == 100) {
  console.log("Nilai A");
} else {
  console.log("Nilai B");
}

// if else if statement : if(kondisi){output} else if(kondisi){output} else{output}
let pendaftaran = "close";
let kuota = 10;

if (pendaftaran == "close") {
  console.log("pendaftaran sukses");
} else if (kuota <= 10) {
  console.log("kuota masih tersedia");
} else {
  console.log("Anda tidak bisa mendaftar");
}

// nested if(if bersarang) : if(kondisi){if(kondisi){output}}
let nilaiUAS = 91;

if (nilaiUAS >= 70) {
  if (nilaiUAS >= 90) {
    console.log("Nilai A");
  } else {
    console.log("Nilai B");
  }
} else {
  console.log("Nilai C");
}

// ternary operator : kondisi ? output jika true : output jika false
let hasil = nilaiUAS >= 70 ? "LULUS" : "TIDAK LULUS";
console.log(hasil);

let result =
  nilaiUAS >= 90 ? "nilai A" : nilaiUAS >= 80 ? "nilai B" : "nilai C";
console.log(result);
