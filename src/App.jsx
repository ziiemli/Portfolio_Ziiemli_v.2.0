import './styles/main.scss';
import React, {useEffect, useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import sanityClient from "./client"
import Start from './pages/Start';



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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
