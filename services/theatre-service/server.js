const http = require('http')
const app = require('./app')

const {Server} = require('socket.io')

const port = 3001;
const server = http.createServer(app);

const io = new Server(server,{
    cors:'*'
});

app.set("io",io);

io.on('connection',(socket)=>{
    console.log("New Socket connected",socket.id);

    socket.on("disconnect",()=>{
        console.log("Client disconnected",socket.id);
    });
});

server.listen(port,()=>{
    console.log("Server is listening on port 3001")
})

