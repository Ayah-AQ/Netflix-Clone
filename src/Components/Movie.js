import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ ModalMovie';

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorites = () => {
    setShowModal(true);
  };
  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"
  return (
    <>
      <Card style={{ width: '18rem' ,margin:'10px'  }}  >
        <Card.Img variant="top" src={poster_pathURL+movie.poster_path} />
        <Card.Body>
          <Card.Title>{movie.title} {movie.name}</Card.Title>
          <div>
          <Card.Text>
            {movie.overview}
          </Card.Text>
          </div>
          <Button variant="dark" onClick={handleAddToFavorites}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
      {showModal && (
        <ModalMovie
          movie={movie}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Movie;