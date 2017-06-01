import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <ul>{movies.map(movie => <Movie title={movie.title} />)}</ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
