
//los middleware son acciones que se ejecutan antes de que se ejecuten los servicios y tiene un tercer parametro next
app.use('/example', methodMiddleware, (req, res) => {
    res.status(200).json({message:'Holaa'})
})

const methodMiddleware = (req, res) => {
    console.log(req.method)
    next()

}