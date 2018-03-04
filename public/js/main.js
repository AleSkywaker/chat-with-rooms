
var socket = io();

socket.on('connect', function (){
  console.log('connected to server')
})

socket.on('disconnect',function (){
  console.log('desconectado')
})

socket.on('newMensaje',function (message){
  console.log('new Mensaje', message)
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);
})

socket.emit('createMessage', {
  from: 'Alex',
  text: 'hi'
}, function(data){
  console.log('Todo OK.', data)
})

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();
  socket.emit('createMessage', {
    from: jQuery('[name=user]').val(),
    text: jQuery('[name=message]').val()
  }, function(){

  })
  // console.log(e)
})



