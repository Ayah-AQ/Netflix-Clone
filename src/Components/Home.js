import { useEffect, useState } from 'react'
import MovieList from './MovieList'


function Home() {

    const [moviesData, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = `http://localhost:8000/trending`;


        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMoviesData(data)

                })
            })
    }

    useEffect(()=>{
        getAllMovies()
    },[])



    return (
        <>
      <MovieList movies={moviesData}/>  
        </>
    )
}

export default Home;