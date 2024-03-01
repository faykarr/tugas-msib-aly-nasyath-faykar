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
    // Memanggil konstruktor kelas induk menggunakan super()
    super(merk, tahun);
    this.jenis = jenis;
  }

  info() {
    // Memanggil metode info dari kelas induk
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

// Contoh penggunaan
let motor = new Motor("Yamaha", 2022, "Sport");

motor.info(); // Memanggil metode info dari kelas Motor
motor.start(); // Memanggil metode start dari kelas Motor
motor.stop(); // Memanggil metode stop dari kelas Motor
