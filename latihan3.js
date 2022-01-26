let nominal = 3345700
let count = 0
let pecahan = [100000,50000,20000,10000,5000,2000,1000,500,200,100]

for (let index = 0; index < pecahan.length; index++) {
    if (nominal >= pecahan[index]) {
        count = Math.floor(nominal / pecahan[index]) // Math.ceil() untuk pembulatan ke atas, Math.round()bulat secara otomatis
        nominal = nominal%pecahan[index]
        console.log("Banyak Pecahan : Rp"+pecahan[index]+" sebanyak "+count);
        console.log(`Sisa nominal Rp${nominal}\n`);
    }else{
        console.log("Untuk pecahan Rp"+pecahan[index]+" Nominal tidak terpenuhi\n");
    }
}