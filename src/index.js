const express = require('express')
const app = express()
const port = 3000

const courseRoutes = require('./routes/route.js')

app.use(express.json())

app.use('/courses', courseRoutes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})