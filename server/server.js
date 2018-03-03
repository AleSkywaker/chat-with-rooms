const path = require('path')
const http = require('http')
const express = require('express')
const app = express();
const socketIO = require('socket.io')
const port = process.env.PORT || 4900;

const publicPath = path.join(__dirname, '../public')


var server = http.createServer(app)
var io = socketIO(server)


app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log(`New user connected ${socket.id}`)

  socket.emit('newEmail', {
    from: 'alex@hotmail.com',
    text: "Hola man",
    ceateAT: "febrero"
  });
  socket.on('createEmail', (email)=>{
    console.log('Email :', email)
  })

  socket.on('disconnect', ()=>{
    console.log(`Cliente desconectado ${socket.id}`)
  })
})



server.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})