const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})