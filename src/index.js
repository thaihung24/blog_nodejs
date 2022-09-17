const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));


console.log(__dirname)
//Template engines
app.engine('handlebars', handlebars.engine({
    extname: '.handlebars',
})); 
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname, 'resources/views'));


app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(5000,()=>{
    console.log('listening on port 5000');
})