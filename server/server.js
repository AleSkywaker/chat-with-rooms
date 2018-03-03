const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 4900;

const publicPath = path.join(__dirname, '../public')


app.use(express.static(publicPath))

app.get('/hola', (req, res)=>{
  res.send('Hello World')
})

app.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})