// Array
const cars = ["agya", "ayla", "cayla", "sigra"];

// Mengambil data di array menggunakan .slice()
// .slice(angkaIndeksnya, angkaPanjangnya)
const ambilData = cars.slice(1, 4);
console.log(ambilData);
console.log("\n");

const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];
// // Ambil confero
const ambilDataSecondCars = secondCars[3][1];
console.log(ambilDataSecondCars);
console.log("\n");

// // Ganti data array
secondCars[0] = "bmw";
console.log(secondCars);
console.log("\n");

let favoriteFood = ["Bakso", "Mie", "Rendang"];
// // .push() Menambah data / value ke belakang array
let pushFavFood = favoriteFood.push("Sayur Asem");
console.log("Ini hasil .push()", favoriteFood);

// .pop() Menghapus elemen / value array yang paling belakang
let popFavFood = favoriteFood.pop();
console.log("Ini hasil .pop()", favoriteFood);

// .shift() Menghapus elemen / value array yang paling pertama
let shiftFavFood = favoriteFood.shift();
console.log("Ini hasil .shift()", favoriteFood);

// .unshift() Menambah data / value ke depan array
let unshiftFavFood = favoriteFood.unshift("Sayur Asem");
console.log("Ini hasil .unshift()", favoriteFood);
console.log("\n");

// .map() Alternative for loop
let arrayOfNum = [4, 9, 25, 16];
let newArr = arrayOfNum.map(Math.sqrt);
console.log(newArr);
console.log("\n");

// .concat() Menggabungkan 2 atau lebih array
let myChildren = ["Kaylie", "Keisha", "Nadhira"];
let yourChildren = ["Marvin", "Zulkarnain", "Irvine"];
let ourChildren = myChildren.concat(yourChildren);
console.log(ourChildren);
console.log("\n");

// tolong cari apakah ada brand namanya esemka
const listCars = ["honda", "toyota", "suzuki"];

// Cek suatu nilai di array ada atau gak menggunakan .includes('valuenya')
console.log(listCars.includes("esemka"), "<<< Ini hasil dari .include()");
console.log("\n");

// Mengambil elemen / value dalam array menggunakan for loop
const motors = ["Legenda", "Supra", "Rxking", "Kharisma"];

let temp1 = [];
for (let i = 0; i < motors.length; i++) {
  temp1.push(motors[i]);
}

console.log(temp1, "<<< Mengambil value array menggunakan for loop");
console.log("\n");

// Ambil data di atas 40
const data = [80, 50, 20, 10, 0];

let temp2 = [];
// let temp2 = 0
for (let i = 0; i < data.length; i++) {
  if (data[i] > 40) {
    temp2.push(data[i]);
  }
}
console.log(temp2, "<<< Mengambil value array yang di atas 40 menggunakan for loop");
console.log("\n");

// Looping Menggunakan .map()
const scores = [10, 50, 70, 80, 10];

// Function dimasukkan ke dalam .map()
const printA = scores.map(function (value) {
  return value * 10;
});
console.log(printA, '<<< Fungsi tidak dimasukkan ke dalam .map()');

// Function tidak dimasukkan ke dalam .map()
const printB = scores.map(myFunction)

function myFunction(value) {
  return value * 10
}
console.log(printB, '<<< Fungsi dimasukkan ke dalam .map()');
console.log('\n');

// Cek value lebih dari 40 menggunakan .map() hasilnya boolean
const print1 = scores.map(function (value) {
  return value > 40;
});
console.log(print1, "Ini hasil dari .map() tanpa if");
console.log("\n");

// Cek value lebih dari 40 menggunakan .map() hasilnya array tapi menyisakan array kosong untuk angka di bawah 40
const print2 = scores.map(function (value) {
  let emptyArray = [];
  if (value > 40) {
    emptyArray.push(value);
  }
  return emptyArray;
});

console.log(print2, "<<< Ini hasil dari .map() menggunakan if");
console.log("\n");

// Cek value lebih dari 40 menggunakan .filter()
const print3 = scores.filter(function (value) {
  return value > 40;
});

console.log(print3, "Ini hasil dari .filter()");
console.log("\n");

// Object
const mySelf = {
  name: "Luthfi",
  nationality: "Indonesia",
  favFoods: ["Bakso", "Indomie Kari", "Sayur Sop"],
  favDrinks: ["Milk Tea", "Sprite", "Mango Juice"],
  favNumber: 5,
  favClub: "Manchester City",
  favPlayer: {
    player: ["Sergio Aguero", "Erling Haaland Bovy"],
    nationality: ["Argentine", "Norway"],
  },
};

// Ambil value 'Sergio Aguero'
console.log(mySelf.favPlayer.player[0]);

// Ganti value 'Sergio Aguero' jadi 'Joao Felix'
mySelf.favPlayer.player[0] = "Joao Felix";
console.log(mySelf.favPlayer.player[0]);
console.log(mySelf);
console.log("\n");

// Practice
const me = {
  name: "haki",
  parents: ["devi", "miko"],
  address: "bogor",
  hobby: "coding",
  olderBrother: {
    name: "altaf",
    address: "bogor",
    hobby: ["coding", "sleeping"],
  },
};

// Ambil data parents "miko"
console.log(me.parents[1]);

// Ganti bogor jadi bandung
me.address = "bandung";
console.log(me.address);
console.log("\n");

// Membuat Object menggunakan keyword new Object()
let objConstructor = new Object()

objConstructor.name = 'Luthfi'
console.log(objConstructor);
console.log('\n');

// Quizz
const NFTStore = {
  artPieces: [
    {
      pieceName: "Emo Flamingos",
      price: 30,
      ownerList: [
        {
          name: "Fida Ernest",
          userID: 23849,
          purchaseDate: "09/13/2021",
        },
        {
          name: "Eric Karger",
          userID: 23510,
          purchaseDate: "09/13/2021",
        },
      ],
    },
    {
      pieceName: "Where is my bit wallet",
      price: 100,
      ownerList: [],
    },
  ],
  storeCredits: 1000,
};

// // Ambil data purchase date ke 2
console.log(NFTStore.artPieces[0].ownerList[1].purchaseDate);

// // Owner list diisi "Dadang" "Dudung"
NFTStore.artPieces[1].ownerList.push("Dadang", "Dudung");
console.log(NFTStore.artPieces[1].ownerList);
