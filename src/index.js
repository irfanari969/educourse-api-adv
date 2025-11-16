const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const courseRoutes = require('./routes/courses.route.js')
const userRoutes = require('./routes/user.route.js')
const profileRoutes = require('./routes/profil.route.js')

app.use(express.json())

app.use('/courses', courseRoutes)
app.use('/user', userRoutes)
app.use('/profil', profileRoutes)


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})