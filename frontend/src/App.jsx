import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Resident from './pages/Resident';
import Security from './pages/Security';

function App() {
    return (
        <div className="flex flex-col h-screen">
            <BrowserRouter>
                <h1 className="text-center text-3xl">
                    DBMS Project - Apna Ghar{' '}
                </h1>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/resident" element={<Resident />} />
                    <Route path="/security" element={<Security />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
