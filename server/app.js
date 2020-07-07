const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

modules = ["-","Programming 1","Artificial Inteligence","Data Structure","Data Mining","Database Fundamentals","Advanced Programinig","Introduction To Computer Network","Programming 2","Web Development Fundamentals","IT System Security"]

// async function request(){
//     let response = await axios.get('http://localhost:8888/guess/1 0 0 1 1 0 1')
//     console.log(response.data.data)
//     return response.data.data
// }

app.get('/predict',async (req,res) => {
    values = req.query.values
    let response = await axios.get(`http://localhost:4000/guess/${values}`)
    data = response.data.data
    predicted = modules[parseInt(data)]
    res.send({predicted})
})

app.listen(3000, () => {
    console.log("Server runing on 3000")
})

