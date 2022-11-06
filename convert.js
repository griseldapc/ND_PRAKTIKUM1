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


// end-point "/celcius" dengan method POST
app.post("/celcius", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.body.celcius) // mengambil nilai panjang dari body
    let reamur = 4/5 * celcius
    let fahrenheit = 9/5 * celcius + 32
    let kelvin = celcius + 273


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    celcius: celcius,
    reamur: reamur,
    fahrenheit: fahrenheit,
    kelvin: kelvin
    }   
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/reamur" dengan method POST
app.post("/reamur", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.body.reamur) // mengambil nilai panjang dari body
    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    reamur: reamur,
    celcius: celcius,
    fahrenheit: fahrenheit,
    kelvin: kelvin
    }   
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/fahrenheit" dengan method POST
app.post("/fahrenheit", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenheit = Number(req.body.fahrenheit) // mengambil nilai panjang dari body
    let celcius = 5/9 * (fahrenheit - 32)
    let reamur = 4/9 * (fahrenheit - 32)
    let kelvin = 5/9 * (fahrenheit - 32) + 273


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    fahrenheit: fahrenheit,
    reamur: reamur,
    celcius: celcius,
    kelvin: kelvin
    }   
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

// end-point "/kelvin" dengan method POST
app.post("/kelvin", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.body.kelvin) // mengambil nilai panjang dari body
    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273)   
    let fahrenheit = 9/5 * (kelvin - 273) + 32


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    kelvin: kelvin,
    fahrenheit: fahrenheit,
    reamur: reamur,
    celcius: celcius
    }   
// memberikan response dengan format JSON yang berisi objek di atas
res.json(response)
})

app.listen(12, () => {
    console.log("Server run on port 12");
})