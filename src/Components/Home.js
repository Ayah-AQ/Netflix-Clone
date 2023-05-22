import { useEffect, useState } from 'react'
import MovieList from './MovieList'


function Home() {

    const [moviesData, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = `https://movies-library-avh7.onrender.com/trending`;


        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    // console.log(data)
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