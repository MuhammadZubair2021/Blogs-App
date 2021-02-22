const express = require('express');
const path = require('path');
const app = new express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rout = require('./blogsRoutes/routes');

//require/import blogsSchema we have defined and exported



// Set the view engine to directly look for ejs files inside the views directory.
app.set('view engine','ejs') ;
app.use('/public',express.static(path.join(__dirname,'static')));

//Database url for datbase connection
const dbURL = 'mongodb+srv://Muhammad-zubair:zubair123@blogsappproject.xnctj.mongodb.net/blogsApp?retryWrites=true&w=majority';

//connect database...
mongoose.connect(dbURL,{ useNewUrlParser:true,useUnifiedTopology:true})
.then((results) => {
    console.log('Data base connected')

}
).catch((error)=>
{
    console.log("Error occured " + error) ;
});

//Parse the form data using body-parser module.
app.use(bodyParser.urlencoded({extended:false}));

//use exported routes
app.use(rout);
app.listen(2000);