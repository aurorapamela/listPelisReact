import React from 'react';

const Movie = props => {
	return (
    <div className="card m-5">
      <img className="card-img-top" src={props.data.image} alt={props.data.title} />
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.data.description}</p>
        <a href={props.data.link} className="btn btn-primary">IMDB</a>
      </div>
    </div>
	);
};

export default Movie;