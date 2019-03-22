const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphbs({ defaultLayout: 'home' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home/index')
})

app.get('/about', (req, res) => {
  res.render('home/about')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log('Server Listening on port:', PORT)
})

