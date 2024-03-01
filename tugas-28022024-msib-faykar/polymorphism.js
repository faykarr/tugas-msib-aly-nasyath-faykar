// Kelas Induk (Superclass) - Kendaraan
class Kendaraan {
  constructor(merk, tahun) {
    this.merk = merk;
    this.tahun = tahun;
  }

  info() {
    console.log(`Merk: ${this.merk}, Tahun: ${this.tahun}`);
  }
}

// Kelas Turunan (Subclass) - Motor
class Motor extends Kendaraan {
  constructor(merk, tahun, jenis) {
    super(merk, tahun);
    this.jenis = jenis;
  }

  info() {
    super.info();
    console.log(`Jenis: ${this.jenis}`);
  }

  start() {
    console.log("Mesin motor dinyalakan.");
  }

  stop() {
    console.log("Mesin motor dimatikan.");
  }
}

// Kelas Turunan (Subclass) - Mobil
class Mobil extends Kendaraan {
  constructor(merk, tahun, model) {
    super(merk, tahun);
    this.model = model;
  }

  info() {
    super.info();
    console.log(`Model: ${this.model}`);
  }

  start() {
    console.log("Mobil dinyalakan.");
  }

  stop() {
    console.log("Mobil dimatikan.");
  }
}

// Fungsi menggunakan polymorphism
function tampilkanInfoKendaraan(kendaraan) {
  kendaraan.info();
}

// Contoh penggunaan polymorphism
let motor = new Motor("Yamaha", 2022, "Sport");
let mobil = new Mobil("Toyota", 2021, "Sedan");

tampilkanInfoKendaraan(motor); // polymorphism dengan objek Motor
tampilkanInfoKendaraan(mobil); // polymorphism dengan objek Mobil
