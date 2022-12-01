require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4321;
const DATABASE_URL =process.env.DATABASE_URL


app.get('/', (req, res) => {
    res.send(`Hello world, I am listening on port: ${PORT}`)
});

app.get('/dburl', (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`I am listening on port: ${PORT}`)
})