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

      socket.on('createMessage', (message)=>{
        console.log('mensaje', message)
        io.emit('newMensaje',  {
            desde : message,
            texto : message,
            creado : new Date().getTime()
          }
        )
      })

      socket.on('disconnect', ()=>{
        console.log(`Cliente desconectado ${socket.id}`)
  })
})



server.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})