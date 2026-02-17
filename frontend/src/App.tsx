import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import StallMapPage from './pages/StallMapPage'
import HomePage from './pages/HomePage'
import EmployeePortalPage from './pages/EmployeePortalPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/stalls" element={<StallMapPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/employee" element={<EmployeePortalPage />} />
                </Routes>
            </main>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default App;
