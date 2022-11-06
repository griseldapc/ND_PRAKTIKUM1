const express = require("express") // memanggil library  fungsi dari express js
const bodyParser = require("body-parser") // memanggil library fungsi dari bodyparser untuk meng ekstrak data menjadi j.son
const cors = require("cors") // memanggil library fungsi dari cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume = panjang * lebar * tinggi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    luas: luas,
    volume: volume
    }   
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let rusuk = Number(req.body.rusuk) // mengambil nilai panjang dari body
    let luas = 6 * rusuk * rusuk
    let volume = rusuk * rusuk * rusuk
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    rusuk: rusuk,
    luas: luas,
    volume: volume
    }  
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let phi = Number(req.body.phi)
    let diameter = Number(req.body.diameter)
    let jari = diameter / 2
    let luas = 4 * phi * jari * jari
    let volume = 4/3 * phi * jari * jari * jari
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    phi: phi,
    jari: jari,
    diameter: diameter,
    luas: luas,
    volume: volume
    }  
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/kerucut" dengan method POST
app.post("/kerucut", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi)
    let diameter = Number(req.body.diameter)
    let jari = diameter / 2
    let phi = Number(req.body.phi)
    let luas = phi * jari * jari
    let volume = 1/3 * phi * jari * jari * tinggi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    phi: phi,
    tinggi: tinggi,
    diameter: diameter,
    jari: jari,
    luas: luas,
    volume: volume
    }  
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})



app.listen(9090, () => {
    console.log("Server run on port 9090");
})