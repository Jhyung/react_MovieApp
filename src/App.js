import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this. setState({
        movies
    })
  }

  _callApi = () => {
    fetch('https://yts.am/api/v2/list_movies.json?sort_ny=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
 

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} medium_cover_image={movie.medium_cover_image} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
