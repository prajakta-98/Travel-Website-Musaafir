const express =require('express')
const app = express()
const path = require('path')
const filepath = path.join(__dirname)
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(`${filepath}/index.html`)
})
app.listen(3000)
console.log('Server running on port 3000');