const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const port = 3000
app.listen(port, () => console.log(`Server running on port ${port}`))