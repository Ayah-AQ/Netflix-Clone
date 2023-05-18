import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalMovie(props) {
  const [comments, setComment] = useState('');

  
  const handleAddToFavorite = (event) => {
    event.preventDefault(); 
    const serverURL = 'http://localhost:8000/add';

    const movieData = {
      title: props.movie.title,
      release_date: props.movie.release_date,
      overview: props.movie.overview,
      comments:comments
          }

    axios
      .post(serverURL, movieData )
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        console.log(error);
       
      });

    
    setComment('');
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
        <Modal.Title>{props.movie.title} {props.movie.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={poster_pathURL+props.movie.poster_path} alt={props.movie.title} width='100%' />
        {props.movie.overview}
        <Form.Group controlId="comments">
          <Form.Label>comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comments}
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