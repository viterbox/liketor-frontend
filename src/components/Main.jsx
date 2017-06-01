import React, { Component } from 'react';
import MovieList from './movies/MovieList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: 'Guardians of the Galaxy Vol. 2',
        }, {
          id: 2,
          title: 'Wonder Woman',
        },
      ],
    };
  }

  render() {
    return (
      <div><MovieList movies={this.state.movies} /></div>
    );
  }

}

export default Main;
