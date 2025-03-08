const express = require('express');
const path = require('path');

const app = express();
const port = 8000

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/portfolio', (req,res) => {
    res.render('index');
})



app.listen(port, () => console.log(`app listening on port ${port}!`));