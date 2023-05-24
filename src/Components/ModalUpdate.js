import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { TbSend } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";

function ModalUpdate(props) {
  const [updatedComment, setUpdatedComment] = useState('');

  const handleUpdate = () => {
    const serverURL = `https://movies-library-bzgy.onrender.com/update/${props.movie.id}`;
    // const serverURL = `http://localhost:8000/update/${props.movie.id}`;

    //updateComment/:id
    const updatedMovieData = {
      comments: updatedComment
    };

    axios
      .put(serverURL, updatedMovieData)
      .then((response) => {
        // Update the comments in the state
        const updatedMovie = { ...props.movie, comments: updatedComment };
        props.setMovies((movies) => {
          const updatedMovies = movies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
          );
          return updatedMovies;
        });
        props.setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseModal = () => {
    props.setShowModal(false);
  };

  const handleCommentChange = (event) => {
    setUpdatedComment(event.target.value);
  };

  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"

  return (
    <Modal show={props.showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Image variant="top" src={poster_pathURL+ props.movie.poster_path} fluid  height='40%' width='40%'/>
       <p>{props.movie.overview}</p>
        <Form.Group controlId="updatedComment">
          <br/>
          <Form.Label><strong>Update the Comment</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={updatedComment}
            onChange={handleCommentChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="transparent" onClick={handleCloseModal} >
          <GiCancel size='30px'/>
        </Button>
        <Button variant="transparent" onClick={handleUpdate} >
          <TbSend size='30px'/>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdate;