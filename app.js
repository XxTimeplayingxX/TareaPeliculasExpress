const express = require('express');
const bodyParser = require('body-parser');

const movieRoutes = require('./routes/movie-routes');
const app = express();

app.use('/api/movies', movieRoutes);

//Vamos a hacer la segunda parte del deber


app.listen(4000);