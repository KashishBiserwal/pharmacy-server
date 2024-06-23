const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routes/authroutes'))

app.get('/', (req, res) => {
    res.send('Server Running!')
})

app.all('*', (_req, res) => {
    res.status(200).send({
        status: 404,
        error: 'Not found',
        error_description: `(${_req.url}), route or file not found.`,
    })
})

const PORT = process.env.PORT || 3000
const uri = process.env.MONGO_URI;

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://krish:pharmacy@cluster0.8txhcee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to database');

    } catch (err) {
        console.error('Error connecting to database', err);
    } finally {
        mongoose.connection.close();
    }
}

connect();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})