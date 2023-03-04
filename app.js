const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.set('views', './')
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/style'))
app.get('/', (req, res) => {
  res.render('main', { title: 'Greetings from Pug' })
})
app.get('/singup', (req, res) => {
  res.render('index', { title: 'Greetings from Pug' })
})
app.get('/login', (req, res) => {
    res.render('login', { title: 'Greetings from Pug' })
  })

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})