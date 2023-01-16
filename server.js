const express = require('express')
const app = express()
const PORT = 3000


//========
//Routes
//========
app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

//=========
//Listener
//=========
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})