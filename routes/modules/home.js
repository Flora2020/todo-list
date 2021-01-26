const express = require('express')
const Todo = require('../../models/todo')
const router = express.Router()

router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => { console.error(error) })
})

module.exports = router