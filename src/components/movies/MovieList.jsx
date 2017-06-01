import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {

	render() {
		const { movies } = this.props;
		return (
			<ul>{movies.map(movie => <Movie title={movie.title} />)}</ul>
		);
	}
}

MovieList.propTypes = {
	movies: React.PropTypes.arrayOf.isRequired,
};

export default MovieList;
