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


// Nomor 3
app.post("/desimal", (req,res) => {
    let d = Number(req.body.d)

    let b = d.toString(2)
    let o = d.toString(8)
    let h = d.toString(16).toUpperCase()

    let response = {
        desimal: d,
        result: {
            biner: b,
            oktal: o,
            hexadecimal: h
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    let d = parseInt(biner, 2)
    let o = parseInt(biner, 2).toString(8)
    let h = parseInt(biner, 2).toString(16).toUpperCase()
    let response = {
        biner: biner,
        result: {
            desimal: d,
            oktal: o,
            hexadecimal: h
        }
    }
    res.json(response)
})

app.post("/oktal", (req,res) => {
    let oktal = Number(req.body.oktal)
    let d = parseInt(oktal, 8).toString(10)
    let b = parseInt(oktal, 8).toString(2)
    let h = parseInt(oktal, 8).toString(16).toUpperCase()
    let response = {
        oktal: oktal,
        result: {
            desimal: d,
            biner: b,
            hexadecimal: h
        }
    }
    res.json(response)
})

app.post("/hexadecimal", (req,res) => {
    let hexadecimal = req.body.hexadecimal
    let d = parseInt(hexadecimal, 16).toString(10)
    let b = parseInt(hexadecimal, 16).toString(2)
    let o = parseInt(hexadecimal, 16).toString(8)
    let response = {
        hexadesimal: hexadecimal,
        result: {
            desimal: d,
            biner: b,
            oktal: o
        }
    }
    res.json(response)
})



app.listen(9090, () => {
    console.log("Server run on port 9090");
})