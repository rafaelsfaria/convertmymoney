const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, err => {
  if (err) {
    console.log('Failed to start server')
  } else {
    console.log('Server online on', port);
  }
})