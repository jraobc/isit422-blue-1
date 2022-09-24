const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.get('/', (req, res) => {

});

app.get('/jrao', (req,res) => {
    res.sendFile('jrao.html', {root: 'public'})
});


