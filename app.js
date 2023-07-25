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
    res.sendFile('./views/about.html', { root: __dirname });
});

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});