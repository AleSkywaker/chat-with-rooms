
var socket = io();

socket.on('connect', function (){
  console.log('connected to server')
})

socket.on('disconnect',function (){
  console.log('desconectado')
})

socket.on('newMensaje',function (message){
  console.log('new Mensaje', message)
})



