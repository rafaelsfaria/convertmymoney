const express = require('express')
const path = require('path')
const { convert, toMoney } = require('./lib/convert');

const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;
  if (cotacao && quantidade) {
    const conversao = convert(cotacao, quantidade)
    res.render('cotacao', {
      conversao: toMoney(conversao),
      cotacao: toMoney(cotacao),
      quantidade: toMoney(quantidade),
      error: false
    })  
  } else {
    res.render('cotacao', { error: 'Valores inválidos' })
  }
})

app.listen(port, err => {
  if (err) {
    console.log('Failed to start server')
  } else {
    console.log('Server online on', port);
  }
})