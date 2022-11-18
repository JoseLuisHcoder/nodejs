const express = require('express')

const port = 9000
const app = express()
app.use(express.json())

const moviesDB = []

// {
//     id:1,
//     title:"rambo",
//     year: 1995,
//     director:"jhon",
//     genre:['action', 'belico']

// }

let id = 1

app.get('/', (req, res) => {
    res.json({
        message:"OK"
    })
})

//? rutas de movies

app.get('/movie', (req, res) => {
    res.status(200).json(moviesDB)
})

app.post('/movie', (req, res) => {
    const {title} = req.body

    if(title){
        const newMovie = {
            id: id++,
            title,
            year,
            director,
            genre:[]
        }
        moviesDB.push(newMovie)
        res.status(200).json(newMovie)
    } else {
        res.status(400).json({mesaage:'invalid data'})
    }

})

app.get('/movie/:id', (req, res) => {
    const id = req.params.id;

    const movie = moviesDB.find(item => item.id == id)

    if(movie){
        res.status(200).json(movie)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})