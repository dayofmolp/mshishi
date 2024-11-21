import React from "react";
import { useParams } from "react-router-dom";

const propertyDetails = {
  1: { name: "Kasselvlei Road", description: "Details about Kasselvlei Road." },
  2: { name: "Durham Road", description: "Details about Durham Road." },
  3: { name: "Glen Haven", description: "Details about Glen Haven." },
};

function PropertyPage() {
  const { id } = useParams();
  const property = propertyDetails[id];

  if (!property) {
    return <h2>Property not found!</h2>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyPage;
