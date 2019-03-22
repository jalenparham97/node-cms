const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

// Load Routes
const main = require('./routes/home/index')
const admin = require('./routes/admin/index')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Set View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'home' }))
app.set('view engine', 'handlebars')

// Use Routes
app.use('/', main)
app.use('/admin', admin)

const PORT = 5000
app.listen(PORT, () => {
  console.log('Server Listening on port:', PORT)
})

