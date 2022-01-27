const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/grocery",(request,response)=>{
    let data = request.body.grocery
    let total_asli = 0, total = 0
    let total_item = 0

    for (let i = 0; i < data.length; i++) {
        if(data[i].qty >= data[i].min_discount){
            total_asli = data[i].price*data[i].qty
            total_asli -= total_asli*data[i].discount
            total += total_asli
            total_item += data[i].qty
        }
        if (data[i].qty < data[i].min_discount) {
            total += data[i].price*data[i].qty
            total_item += data[i].qty
        }
        
    }
    return response.json({
        total : `${total}`,
        item : `${total_item}`
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})