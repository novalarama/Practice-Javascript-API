const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/market",(request,response)=>{
    let uang = request.body.nominal
    let price = [50000,150000,50000,80000]
    let nama = ["Lampu Disco","Kursi Goyang","Lampu Taman","Cermin Hias"]
    let hasil = []

    for (let i = 0; i < price.length; i++) {
        if (uang >= price[i]) {
            uang -= price[i]

            hasil.push({
                Terbeli : nama[i],
                Sisa : uang
            })
        }
    }
    return response.json({
        hasil
    })
})



app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})