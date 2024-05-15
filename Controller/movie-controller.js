const {v4: uuiv4} = require('uuid');
const HTTPError = require('../MODELS/http-error');

const Movies = [
    {
      "id": 1,
      "titulo": "Inception",
      "duracion": "148 minutos",
      "director": "Christopher Nolan",
      "genero": "Ciencia ficción"
    },
    {
        "id": 2,
      "titulo": "The Godfather",
      "duracion": "175 minutos",
      "director": "Francis Ford Coppola",
      "genero": "Crimen"
    },
    {
        "id": 3,
      "titulo": "Pulp Fiction",
      "duracion": "154 minutos",
      "director": "Quentin Tarantino",
      "genero": "Crimen"
    },
    {
        "id": 4,
      "titulo": "The Shawshank Redemption",
      "duracion": "142 minutos",
      "director": "Frank Darabont",
      "genero": "Drama"
    },
    {
        "id": 5,
      "titulo": "The Dark Knight",
      "duracion": "152 minutos",
      "director": "Christopher Nolan",
      "genero": "Acción"
    }
  ]

const getAllMovies = (req, res, next)=>{
    res.json({Movies});
}
const getMovieById = (req, res, next)=>{
  const movie = Movies.find(m=>{
      return m.id == req.params.mid;
  });
  if(!movie){
      const error = new Error('Película No existe');
      error.code = 404;
      next(error);
  }else{
      res.json({movie});
      console.log(movie);
  }
}


getByTitulo = (req, res, next)=>{
  const movie = Movies.find(m=>{
    return m.titulo === req.params.tuid
  });
  if(!movie){
    throw new HttpError('Título no encontrado');
  }
  res.json({movie});
}

saveMovie = (req, res, next)=>{
  const {id, titulo, duracion, director, genero} = req.body;
  const createdMovie = {
    id : titulo,
    titulo :titulo, 
    duracion : duracion, 
    director : director, 
    genero : genero
  }
  console.log(createdMovie);
  Movies.push(createdMovie);
  res.status(201).json({movie:createdMovie})
}


exports.getAllMovies = getAllMovies;
exports.getMovieById = getMovieById;
exports.getByTitulo = getByTitulo;
exports.saveMovie = saveMovie;