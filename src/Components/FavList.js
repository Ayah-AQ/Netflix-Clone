import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalUpdate from './ModalUpdate';
import { MdDelete } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";



export default function FavList() {
  const [movies, setMovies] = useState([]);
  const [showFullText, setShowFullText] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    // Fetch the favorite movies data from the server
    const serverURL = `https://movies-library-bzgy.onrender.com/list`;
    // const serverURL = `http://localhost:8000/list`;

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
    console.log(id)
    const serverURL = `https://movies-library-bzgy.onrender.com/del/${id}`;
    // const serverURL = `http://localhost:8000/del/${id}`;

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
      <div className="row" style={{marginLeft:'5%', marginRight:'5%'}}>
        {movies.map((movie) => (
          <div className="col-md-3" key={movie} >
            <Card >
              <Card.Img variant="top" src={poster_pathURL + movie.poster_path} height='300rem' />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
              
                {movie.overview }
             
            </Card.Text>
                <Card.Text>
                  

                 <strong>Comments:</strong>  {movie.comments} 

                </Card.Text>
                <Button
                  variant='transparent'
                  onClick={() => handleDelete(movie.id)}
                >
                    <MdDelete size='25px'/>
                </Button>
                <Button
                  variant="transparent"
                  onClick={() => handleUpdate(movie)}
                >
                  <RiFileEditLine size='25px'/>
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
