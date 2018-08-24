import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	render() {
		return (
			<div>
				<MoviePoster medium_cover_image = {this.props.medium_cover_image} />
				<h1> {this.props.title}</h1>	
			</div>
		)
	}
}

class MoviePoster extends Component {
	render() {
		return (
			<img src = {this.props.medium_cover_image} />
		)
	}
}

function MoviePoster({medium_cover_image}) {
	return (
		<img src ={medium_cover_image} alt="Movie Poster" />
	)
}

export default Movie;