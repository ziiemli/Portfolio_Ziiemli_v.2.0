import './app.scss'
import React, {useEffect, useState} from "react"
import sanityClient from "./client"



const App = () => {
    
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type=="movie"]{
    title,
    overview,
    releaseDate,
    }`
        )
            .then((data) => setMovies(data))
            .catch(console.error)
    })
    console.log(movies)
  
    return (
        <div>
            <h1 className='vert'>HELLO</h1>
            {movies&&movies.map((movie,index)=> <div>{movie.title}</div>)}
        </div>
    )
}

export default App
