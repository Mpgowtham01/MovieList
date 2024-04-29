import movieListDB from "../model/Moviemodel.js";

export async function createField(req, res, next) {
  try {
    const data = req.body;
    const details = {
      title: data.title,
      classification: data.classification,
      length: data.length,
      backdrop: data.backdrop,
      cast: data.cast,
      director: data.director,
      genres: data.genres,
      imdb_rating: data.imdb_rating,
      overview: data.overview,
      poster: data.poster,
      released_on: data.released_on,
      slug: data.slug,
    };

    const createField = await movieListDB.create(details);
    res.status(201).json({
      message: "Field Created Successfully",
      data: createField,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getAllMoviefields(req, res, next) {
  try {
    const result = await movieListDB.aggregate([
      { $unwind: "$genres" },
      { $group: { _id: "$genres", movies: { $push: "$$ROOT" } } },
    ]);

    result.sort((a, b) => a._id.localeCompare(b._id));

    const formattedResult = result.map((category) => ({
      category: category._id,
      movies: category.movies.map((movie) => ({
        director: movie.director,
        imdb_rating: movie.imdb_rating,
        length: movie.length,
        poster: movie.poster,
        title: movie.title,
        slug: movie.slug,
        released_on: movie.released_on,
        classification: movie.classification,
        backdrop: movie.backdrop,
        cast: movie.cast,
        genres: movie.genres,
        overview: movie.overview,
      })),
    }));

    res.json(formattedResult);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function getOneMovie(req, res, next) {
  try {
    const id = req.params.id;
    const getone = await movieListDB.findById(id);
    res.status(200).json({
      message: "getOneMovie successfully",
      data: getone,
    });
  } catch (err) {
    next();
  }
}
