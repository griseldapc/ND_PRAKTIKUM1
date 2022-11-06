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

app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / (tinggi * tinggi)
    let status= ""
    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)"
    } else if (bmi >= 25 && bmi <= 29.9) {
        status ="Kelebihan berat badan"
    } else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }
    res.json(response)
})

app.listen(1010, () => {
    console.log("Server run on port 1010");
})