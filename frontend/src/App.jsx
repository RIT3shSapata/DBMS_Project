import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import Resident from './pages/Resident';
import Security from './pages/Security';

function App() {
    return (
        <BrowserRouter>
            <h1 className="text-center text-3xl">DBMS Project - Apna Ghar </h1>
            <Navbar />
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/resident" element={<Resident />} />
                <Route path="/security" element={<Security />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
