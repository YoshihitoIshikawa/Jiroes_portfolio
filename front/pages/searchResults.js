import { useState } from "react";

function SearchResults({ params }) {
  return (
    <div>
      {params.searchResults.map((shop) => (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <p>{shop.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
