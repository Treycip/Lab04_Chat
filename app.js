const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
app.use(express.static('chatG'));

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})  

//Procedimiento 1:
//   console.log('Un usuario se ha conectado.....!!!!')
// })

// app.get('/', (req, resp) => {
//   resp.send('<h1>Aplicacion de Chat </h1>')
// })

// server.listen(3000, () => {
//   console.log('Servidor corriendo en http://localhost:3000')
// })
//Procedimiento 2:
//    socket.on('disconnect', () =>{
//        console.log('Un usuario se ha desconectado......!!!!')
//    })
// })
//Procedimiento 3:
  //  socket.on('chat', (msg) =>{
  //   console.log('Mensaje: ' + msg)
  //   io.emit('chat', msg)
  //  })
   //Procedimiento 4:
app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/chatG/chat_view.html`)
})

server.listen(3200,() => {
    console.log('Servidor corriendo en http://localhost:3200')
})