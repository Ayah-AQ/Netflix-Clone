import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { TbSend } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";


function ModalMovie(props) {
  const [comments, setComment] = useState('');


  
  const handleAddToFavorite = (event) => {
    event.preventDefault(); 
    const serverURL = 'https://movies-library-bzgy.onrender.com/add';
    // const serverURL = 'http://localhost:8000/add';
     
    var movieData = {
      title: props.movie.title,
      release_date: props.movie.release_date,
      overview: props.movie.overview,
      poster_path: props.movie.poster_path,
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
    <Modal show={props.showModal} onHide={handleCloseModal} > 
    <Modal.Header closeButton>
      <Modal.Title>{props.movie.title} {props.movie.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image src={poster_pathURL+props.movie.poster_path} alt={props.movie.title} width='40%' height='40%' />
      <p>

      {props.movie.overview}
      </p>
      <Form.Group controlId="comments">
        <Form.Label><strong>Please add ur comments</strong></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comments}
          onChange={handleCommentChange}
        />
      </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      
      <Button variant="transparent" onClick={handleCloseModal} >
      <GiCancel size='30px'/>
      </Button>
      <Button variant="transparent" onClick={handleAddToFavorite} >
      <TbSend size='30px'/>
      </Button>
    </Modal.Footer>
  </Modal>
);
}

export default ModalMovie;