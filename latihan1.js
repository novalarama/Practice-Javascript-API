// number 1
let umur = [150,20,35,80,50]
let jmlRemaja = 0, jmlDewasa = 0, jmlTua = 0

for (let number = 0; number < umur.length; number++) {
    if (umur[number] >= 12 && umur[number] <= 23) {
        jmlRemaja += 1
    }else if(umur[number] >= 24 && umur[number] <= 55){
        jmlDewasa += 1
    }else if(umur[number] > 55)
        jmlTua += 1
}

console.log("Jumlah Remaja : "+jmlRemaja) // atau juga bisa dengan console.log(`Jumlah Remaja : ${jmlRemaja}`)
console.log("Jumlah Dewasa : "+jmlDewasa)
console.log("Jumlah Tua : "+jmlTua)