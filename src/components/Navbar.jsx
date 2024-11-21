import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Home</Link>
      <Link to="/contact" style={{ margin: "0 1rem", color: "#fff" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
