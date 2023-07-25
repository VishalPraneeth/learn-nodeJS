const express = require('express');

const app = express();
// register view engine
app.set('view engine', 'ejs');


app.set('views', 'views');

// listen for requests

app.listen(3000);

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