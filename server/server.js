const path = require('path')
const http = require('http')
const express = require('express')
const app = express();
const socketIO = require('socket.io')
const {generateMessage} = require('./utils/message');
const port = process.env.PORT || 4900;

const publicPath = path.join(__dirname, '../public')

var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log(`New user connected ${socket.id}`)

  // socket.emit from admin, text welcome to the chat app
       socket.emit('newMensaje', generateMessage('Admin', 'Bienvenido a la APP'))
  // socket.broadcast.emit from admin, text new user joined
       socket.broadcast.emit('newMensaje', generateMessage('Admin', 'Un nuevo usuario se ha unido'))

      socket.on('createMessage', (message)=>{

          io.emit('newMensaje', generateMessage(message.from, message.text))
          // socket.broadcast.emit('newMensaje',  {
          //     desde : message.from,
          //     texto : message.text,
          //     creado : new Date().getTime()
          //   })
          })

      socket.on('disconnect', ()=>{
      console.log(`Cliente desconectado ${socket.id}`)
  })
})

server.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})