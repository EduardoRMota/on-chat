const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, ('public'))));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', (req,res) => {
    res.render('index.html');
});

app.get("/test",()=>{
    res.status(200).json("hey")
    return
});

server.listen(3000);