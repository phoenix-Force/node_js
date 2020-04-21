// const http = require('http');
const express = require('express')
const app = express()
const parser = require('body-parser')
// const routes = require('./routes');
app.use(parser.urlencoded({extended: false}))

app.use('/message', (req, res, next) => {
    // console.log("I ama middleware");
    // res.send('<h1>I ama express from 1st middleware</h1>')
    // console.log("Message is")
    res.send('<form action="/add-message" method="POST"><input type="text" name="message"><input type="submit"></form>');
});
app.post('/add-message',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
});
app.use('/', (req, res, next) => {
    // console.log('2nd Middleware');
    res.send('<h1>Home Page</h1>')
})
// console.log(routes.someText);
app.listen(4000);
// const server = http.createServer(app);

// server.listen(3000);
