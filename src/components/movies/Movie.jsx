import React, { Component } from 'react';

class Movie extends Component {
	render() {
		const { title } = this.props;
		return (
			<li>
				{ title }
			</li>
		);
	}
}

Movie.propTypes = {
	title: React.PropTypes.string.isRequired,
};

export default Movie;
