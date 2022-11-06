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

app.post("/ganjilgenap", (req,res) => {
    let nilai = req.body.nilai   
   
let status = ''
    if (nilai%2==0) {
        status= "genap"
    } else if(nilai%2==1){
        status= "ganjil"
    } 
    let response = {
        nilai:nilai,
        status:status 
    }
    res.json(response)
})

app.listen(2020, () => {
    console.log("Server run on port 2020");
})