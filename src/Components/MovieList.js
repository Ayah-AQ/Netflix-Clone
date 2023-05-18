import React from 'react';
import Movie from './Movie';
import { Row } from 'react-bootstrap';
import { ListM } from './Style/Style';

function MovieList(props) {
  return (
    <ListM>
    <Row>
      {props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Row>
      </ListM>
  );
}

export default MovieList;