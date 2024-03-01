// Kelas Mesin dengan Encapsulation
class Mesin {
  #keadaanMesin = "mati";

  hidupkan() {
    this.#keadaanMesin = "hidup";
    console.log("Mesin dinyalakan.");
  }

  matikan() {
    this.#keadaanMesin = "mati";
    console.log("Mesin dimatikan.");
  }

  dapatkanKeadaanMesin() {
    return this.#keadaanMesin;
  }
}

// Kelas Motor menggunakan Mesin dengan Encapsulation
class Motor {
  #mesin; // Komposisi: Motor memiliki objek Mesin

  constructor(merk, tahun) {
    this.merk = merk;
    this.tahun = tahun;
    this.#mesin = new Mesin();
  }

  start() {
    this.#mesin.hidupkan();
    console.log("Motor dinyalakan.");
  }

  stop() {
    this.#mesin.matikan();
    console.log("Motor dimatikan.");
  }

  getKeadaanMesin() {
    return this.#mesin.dapatkanKeadaanMesin();
  }
}

// Contoh penggunaan
let motor = new Motor("Kawasaki", 2023);

console.log(`Merk: ${motor.merk}`);
console.log(`Tahun: ${motor.tahun}`);
console.log(`Keadaan Mesin: ${motor.getKeadaanMesin()}`);
motor.start();
console.log(`Keadaan Mesin: ${motor.getKeadaanMesin()}`);
motor.stop();
console.log(`Keadaan Mesin: ${motor.getKeadaanMesin()}`);
