const express = require("express");
// const mongoose = require("mongoose");
const { openApis } = require('./api');
const authorized = require('./router');
let app = express();
app.use(express.json());

// app.locals.moment = require('moment');

app.get('/', async ( req, res ) => {
    return res.json({ message: "hii" });
})
app.use('/open',openApis);
app.use('/auth',authorized);

// app.use('/auth',authApis, loadUser);

// app.post('/auth/setFields',setFields);

// mongoose.connect( 'mongodb://localhost:27017/express',( err,data ) => {
//     if(err){
//         console.log("Error connecting DB");
//     }
//     console.log('Database Connected');
// } )

app.listen( 3000,(err,data) => {
    if(err){
        console.log(err);
    }
    console.log("Server on 3000");
})