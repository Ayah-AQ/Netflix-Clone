import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalMovie(props) {
  const [comment, setComment] = useState('');

  const handleAddToFavorite = () => {
    const serverURL = 'http://localhost:8000/add';

    const movieData = {
      title: props.movie.title,
      release_date: props.movie.release_date,
      overview: props.movie.overview,
    };

    axios
      .post(serverURL, movieData)
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        console.log(error);
       
      });

    
    setComment('');// Reset comment 
    props.setShowModal(false);
  };

  const handleCloseModal = () => {
    props.setShowModal(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"

  return (
    <Modal show={props.showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={poster_pathURL+props.movie.poster_path} alt={props.movie.title} width='100%' />
        {props.movie.overview}
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="dark" onClick={handleAddToFavorite}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;