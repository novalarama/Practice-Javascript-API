let price = [50000,150000,50000,80000]

let nama = ["Lampu Disco","Kursi Goyang","Lampu Taman","Cermin Hias"]

let nominal = 300000

for (let index = 0; index < price.length; index++) {
    if (nominal >= price[index]) {
        nominal -= price[index]
        console.log("Sudah Terbeli Barang : "+nama[index]);
        console.log(`Sisa Uang Rp${nominal}\n`);
    }else{
        // nominal -= price[index]
        price[index] -= nominal
        console.log("Uang tidak cukup membeli barang "+nama[index]+" karena uang kurang Rp"+price[index]);
    }
}