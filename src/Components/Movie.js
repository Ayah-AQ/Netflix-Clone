import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ ModalMovie';
import { RiHeartAddFill } from "react-icons/ri";

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [showFullText, setShowFullText] = useState(false); 


  const handleAddToFavorites = () => {
    setShowModal(true);
  };
  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"


  return (
      <>
      <Card style={{ height:'auto', width: '18rem' ,margin:'10px'  }}  >
        <Card.Img variant="top" src={poster_pathURL+movie.poster_path}  height='60%'/>
        <Card.Body>
          <Card.Title>{movie.title} {movie.name}</Card.Title>
          <div>
          <Card.Text>
              {showFullText ? (
                movie.overview 
              ) : (
                <>
                  {movie.overview.substring(0, 50)} ...
                  <Button variant="link" onClick={() => setShowFullText(true)}>
                    Show More
                  </Button>
                </>
              )}
            </Card.Text>
          </div>
          <Button variant="transparent" onClick={handleAddToFavorites} alt='add to fav'>
          < RiHeartAddFill size='30px' style={{position: 'absolute', top: '95%', left: '85%'}}/>          
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