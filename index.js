const { application } = require('express');
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    var a=1;
    var b=2;
    let c;
    c= a+b
    res.send('hello world');
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})