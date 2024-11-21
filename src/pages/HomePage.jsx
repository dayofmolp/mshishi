import React from "react";
import { Link } from "react-router-dom";

const properties = [
  { id: 1, name: "Kasselvlei Road", description: "Affordable student housing." },
  { id: 2, name: "Durham Road", description: "Close to public transport." },
  { id: 3, name: "Glen Haven", description: "Quiet and scenic area." },
];

function HomePage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome to Student Housing</h1>
      <p>Find affordable housing in Bellville South.</p>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <Link to={`/property/${property.id}`}>
              {property.name} - {property.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
