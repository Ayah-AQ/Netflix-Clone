import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalUpdate from './ModalUpdate';

export default function FavList() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    // Fetch the favorite movies data from the server
    const serverURL = `http://localhost:8000/list`;

    axios
      .get(serverURL)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
// console.log("movieeeeee",movies)
  const handleDelete = (id) => {
    const serverURL = `http://localhost:8000/del/${id}`;

    axios
      .delete(serverURL)
      .then((response) => {
        // Remove the deleted movie from the state
        setMovies((movies) => movies.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const poster_pathURL = "http://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <h1>Favorite List</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={poster_pathURL + movie.poster_path} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.overview}
                  <br/>
                  <br/>

                  Comments: {movie.comments} 

                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleUpdate(movie)}
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <ModalUpdate
          movie={selectedMovie}
          showModal={showModal}
          setShowModal={setShowModal}
          setMovies={setMovies}
        />
      )}
    </div>
  ); 
}
