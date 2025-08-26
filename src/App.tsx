import { Link, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="nav">
        <Link to="/" className="brand">
          <img src="/public/logo.png" alt="R logo" className="logo" />
          <span className="brand-text">Rumeth</span>
        </Link>

        <nav className="links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Rumeth Wijethunge
      </footer>
    </div>
  );
}
