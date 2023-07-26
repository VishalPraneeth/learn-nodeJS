const express = require('express');
const morgan = require('morgan');

const app = express();
// register view engine
app.set('view engine', 'ejs');


app.set('views', 'views');

// listen for requests

app.listen(3000);
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

app.get('/', (req, res) => {
    // res.send('<p> home page </p>');
    res.render('index');
});

app.get('/about', (req, res) => {
    // res.send('<p> about page </p>');
    res.render('about');
});
app.get('/blogs/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).render('404');
});