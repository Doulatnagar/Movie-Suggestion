import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Movie } from "../movieApi";

// eslint-disable-next-line react/prop-types
export const Body = ({ searchValue }) => {
  const [movieApi, setMovieApi] = useState(Movie);

  const filterMovies = (searchingMovie) =>
    searchingMovie !== null
      ? setMovieApi(
          Movie.filter((movies) => movies.genres.includes(searchingMovie))
        )
      : setMovieApi(Movie);

  useEffect(() => {
    filterMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <Grid container spacing={2}>
        {movieApi?.map((filterMovie) => (
          <Grid key={movieApi.id} item xs={3}>
            <Card sx={{ maxWidth: 345, mt: "10px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={filterMovie.posterUrl}
                  alt={filterMovie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {filterMovie.title} {filterMovie.year}
                  </Typography>
                  <Typography gutterBottom variant="h8" component="div">
                    {filterMovie.genres.map((genre) => `${genre}  `)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {filterMovie.plot}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
