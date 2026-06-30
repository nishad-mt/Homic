import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        Kam<span>Karo</span>
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