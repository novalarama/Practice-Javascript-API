let data = [
    {
    name: "Erpan Wijaya",
    nik: 2503032303020003
    },
    {
    name: "Edo Jhon",
    nik: 3568981402980001
    },
    {
    name:"Andre Hou",
    nik:2604041212880002
    }
    ]

for (let i = 0; i < data.length; i++) {
    let nik = data[i].nik
    let nama = data[i].name
    

// convert type to string
var string = nik.toString()

var ubah = string.split("");

let newNik = ubah.map(String)
let tgl = []

for (let i = 0; i < newNik.length; i++) {
    
    if (i == 6 && newNik[10] == 0) {
        console.log(nama);
        console.log(newNik[6]+newNik[7]+"-"+newNik[8]+newNik[9]+"-20"+newNik[10]+newNik[11]+"\n");
    }
    if (i == 6 && newNik[10] != 0) {
        console.log(nama);
        console.log(newNik[6]+newNik[7]+"-"+newNik[8]+newNik[9]+"-19"+newNik[10]+newNik[11]+"\n");
    }
}
}
