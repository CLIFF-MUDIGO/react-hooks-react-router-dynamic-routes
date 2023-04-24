import React from "react";
import { Route } from "react-router-dom";
// Update the file path to correctly reference the MoviesList component

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesPage movies={movies} />
    </div>
  );
}

export default MoviesPage;
