import React from 'react';

function Movie({ title }) {
  return (
    <li>{title}</li>
  );
}

Movie.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Movie;
