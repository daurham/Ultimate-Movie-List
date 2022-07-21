const express = require('express');
const path = require('path');
const ctlr = require('./controller');

const app = express();
const PORT = process.env.USER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// Listeners:
app.get('/movies', ctlr.getData);
app.post('/movies', ctlr.postData); 
app.put('/movies', ctlr.updateData);
app.delete('/movies', ctlr.deleteData);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));