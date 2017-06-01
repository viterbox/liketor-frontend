import React from 'react';
import PropTypes from 'react-prop-types';

function Movie({ title }) {
  return (
    <li>{title}</li>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Movie;
