//En este archivo vamos a tner las rutas y sus respectivos verbos

const router = require('express').Router()

// const express = require('express')
// const router = express.Router()

const taskServices = require('./task.services')

router.get('/todo', taskServices.getAllTodos)
router.post('/todo', taskServices.postTodo)
router.get('/todo/:id', taskServices.getTodoById)


module.exports = router








