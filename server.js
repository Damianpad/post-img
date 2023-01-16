const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 3000


//===========
// Middleware
//===========
app.use(bodyParser.urlencoded({ extended: true }))


//======
//Routes
//======
app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})

//========
//Listener
//========
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})