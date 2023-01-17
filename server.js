const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://img-post:g7WXzbqFWl9MsnwF@cluster0.ainxlwh.mongodb.net/?retryWrites=true&w=majority'
//g7WXzbqFWl9MsnwF

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('post-img')
        const imgCollection = db.collection('imgs')

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
            imgCollection.insertOne(req.body)
                .then(result => {
                    // res.redirect('/')
                })
                .catch(error => console.error(error))
        })

    })
    
    .catch(error => console.error(error))






//========
//Listener
//========
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})