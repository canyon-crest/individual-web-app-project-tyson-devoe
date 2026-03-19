import './Navbar.css'
import GoogleLogin from './GoogleLogin'

function Nav({ setPage }) {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("about")}>About</li>
                <li onClick={() => setPage("store")}>Store</li>
                <li onClick={() => setPage("fun")}>Fun</li>
                <li onClick={() => setPage("guestbook")}>Guestbook</li>
                <li onClick={() => setPage("contact")}>Contact</li>
            </div>
            <GoogleLogin />
        </nav>
    )
}

export default Nav
