import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Card } from "antd";
import "./MovieList.scss";
import Api from "../../Api";

function MovieList({ searchQuery = "" }) {
  useEffect(() => {
    getValues();
  }, []);

  const [moviesList, setMoviesList] = useState([]);

  const getValues = async () => {
    await Api.get("movielist/getall").then((res) => {
      console.log("res", res);
      setMoviesList(res.data);
    });
  };

  const formatFirstDateMonthYear = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return `${year}`;
  };

  const filteredMovies = moviesList.filter((category) =>
    category.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <Container>
        <Grid container>
          {filteredMovies.map((category, index) => (
            <div key={index} className="grid_div">
              <h2>{category.category}</h2>
              <Grid container spacing={2}>
                {category.movies.map((movie, i) => (
                  <Grid item md={4} sm={12} key={i}>
                    <Card className="card_component">
                      <img src={movie.poster} alt="Movie Poster" />
                      <h3>{movie.title}</h3>
                      <div className="director">
                        <div className="imdbRow">
                          <span className="imdbrating1">{movie.director}</span>
                          &nbsp;
                          <img
                            src="https://logowik.com/content/uploads/images/imdb-internet-movie-database5351.jpg"
                            className="imdbimage"
                          />
                          <span className="imdbrating">
                            {movie.imdb_rating}&nbsp;
                            <span
                              style={{ fontSize: "12px", marginTop: "7px" }}
                            >
                              Rating
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="overview">{movie.overview}</p>
                      <div>
                        <span className="relesedOn">
                          {formatFirstDateMonthYear(movie.released_on)}
                        </span>
                        <span className="length">{movie.length}</span>&nbsp;
                        <span className="imdb">
                          U/A &nbsp;&nbsp;&nbsp;{movie.classification}
                        </span>
                      </div>
                      <div className="staring">
                        <span>Staring</span> &nbsp;{movie.cast.join(", ")}
                      </div>
                      <div className="button_MovieList">
                        <button>Watch Online</button>
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MovieList;
