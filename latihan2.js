let harga = [3000,10000,4500,5000]
let jumlah = [20,8,10,5]
let total = 0

for (let index = 0; index < harga.length; index++) {
    total += harga[index]*jumlah[index]    
}

let PPN = (10*total)/100
total += PPN

console.log(`Total = ${total}`);