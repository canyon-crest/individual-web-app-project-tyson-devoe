import './App.css'
import { useState } from 'react'
import Nav from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Fun from './pages/Fun'
import Guestbook from './pages/Guestbook'
import Contact from './pages/Contact'

function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <Nav setPage={setPage} />
            <div className="page-content">
                {page === "home" && <Home />}
                {page === "about" && <About />}
                {page === "store" && <Store storeName="Tyson's Shop" ownerName="Tyson" />}
                {page === "fun" && <Fun />}
                {page === "guestbook" && <Guestbook />}
                {page === "contact" && <Contact />}
            </div>
            <Footer />
        </>
    )
}

export default App
