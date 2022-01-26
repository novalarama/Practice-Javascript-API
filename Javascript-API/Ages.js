const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/ages", (request,response)=>{
// store the request data
let data = request.body.ages
let jmlRemaja = 0, jmlDewasa= 0, jmlTua = 0

for (let i = 0; i < data.length; i++) {
    if (data[i].umur >= 12 && data[i].umur <= 23) {
        jmlRemaja += 1
    }else if(data[i].umur >= 24 && data[i].umur <= 55){
        jmlDewasa += 1
    }else if(data[i].umur > 55){
        jmlTua += 1
    }
}
return response.json({
    Jumlah_Remaja : `${jmlRemaja}`,
    Jumlah_Dewasa : `${jmlDewasa}`,
    Jumlah_Tua : `${jmlTua}`
})
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})

