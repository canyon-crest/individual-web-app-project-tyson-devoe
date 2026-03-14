import './Navbar.css'

function Nav({ setPage }) {
    return (
        <nav className="navbar">
            <li onClick={() => setPage("home")}>Home</li>
            <li onClick={() => setPage("about")}>About</li>
            <li onClick={() => setPage("contact")}>Contact</li>
        </nav>
    )
}

export default Nav
