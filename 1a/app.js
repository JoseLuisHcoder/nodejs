const express = require('express')
const port = 7500
const app = express()

app.get('/api', (req, res) => {
    res.json({
        message:"no pares",
        data:"confia en ti"

    })
})
app.post('/api', (req, res) => {
    res.json({
        message: "Al final lo lograras"
    })
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})