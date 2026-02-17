import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import StallMapPage from './pages/StallMapPage'
import HomePage from './pages/HomePage'
import EmployeePortalPage from './pages/EmployeePortalPage'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"


function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/stalls" element={<StallMapPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/employee" element={<EmployeePortalPage />} />
                </Routes>
            </div>

            <Footer />

        </div>
    )
}


export default App;
