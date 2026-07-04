import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <div style={{display:"flex", alignItems:"center", gap:"8px"}}><img src={logo} alt="logo" style={{width:"32px", height:"32px"}}/>HOM<span>IQ</span></div>
      </div>

      <div className="navbar-links">

        {["Login/Signup","How it works", "For Workers", "Trust & Safety"].map((l) => (
          <a key={l} href="#" className="nav-link">
            {l}
          </a>
        ))}

        <button className="navbar-btn">
          Get Started
        </button>

      </div>

    </nav>
  );
}