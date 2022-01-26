const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/money",(request,response)=>{
    let money = [100000,50000,20000,10000,5000,2000,1000,500,200,100]
    let nominal = request.body.nominal
    let hasil = []

    for (let i = 0; i < money.length; i++) {
        if (nominal >= money[i]) {
            let count = Math.floor(nominal/money[i])
            nominal = nominal%money[i]

        hasil.push({
            money : money[i],
            jumlah : count
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
