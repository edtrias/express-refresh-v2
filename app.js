const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/houses', (req, res) => {
  res.render('houses')
})

//saving params into a variable and sending it to the ejs
app.get('/houses/:type', (req, res) => {
  let type = req.params.type;
  res.render('housetype', {type});
})

app.get('/list', (req, res) => {
  var list = [
    {city: 'Barcelona', year: 1850},
    {city: 'Sabadell', year: 1673},
    {city: 'Girona', year: 1507}
  ]
  res.render('list', {list})
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
