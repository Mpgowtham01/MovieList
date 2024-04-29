import mongoose from "mongoose";

const { Schema, model } = mongoose;

const movieList = new Schema({
  title: String,
  classification: String,
  length: String,
  backdrop: String,
  cast: Array,
  director: String,
  genres: Array,
  imdb_rating: String,
  overview: String,
  poster: String,
  released_on: String,
  slug: String,
});

movieList.set("autoIndex", true);

const movieListDB = model("MovieTest", movieList);
movieListDB.createIndexes();

export default movieListDB;
