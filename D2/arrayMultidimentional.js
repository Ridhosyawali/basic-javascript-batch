// Array berlapis
const threeDimensionalArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
  ],
];

// Cara akses elemen dalam array multidimensi
console.log(threeDimensionalArray[1][1]);
console.log(threeDimensionalArray[2]);
console.log((threeDimensionalArray[2][2][2] = 100)); //menambahkan 100 diakhir
console.log(threeDimensionalArray);

// Looping
//meloop kurung siku pertama
for (let i = 0; i < threeDimensionalArray.length; i++) {
  // loop kurung siku kedua
  for (let j = 0; j < threeDimensionalArray[i].length; j++) {
    // loop kurung siku ketiga
    for (let k = 0; k < threeDimensionalArray[j].length; k++) {
      console.log(threeDimensionalArray[i][j][k]);
    }
  }
}
