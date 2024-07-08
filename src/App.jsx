import './styles/main.scss';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Start from './pages/Start';
import Home from './pages/Home';



const App = () => {
  
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Navigate to="/en" />} /> {/* Rediriger vers anglais par défaut */}
            <Route path="/:lang" element={<Start />} /> {/* Route dynamique pour la langue */}
            <Route path="/:lang/home" element={<Home />} /> {/* Route dynamique pour la langue */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
