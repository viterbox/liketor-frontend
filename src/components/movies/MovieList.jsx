import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <ul>{movies.map(movie => <Movie title={movie.title} />)}</ul>
  );
}

MovieList.propTypes = {
  movies: React.PropTypes.arrayOf.isRequired,
};

export default MovieList;
