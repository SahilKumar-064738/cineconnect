import React, { useState } from "react";
import FilterBar from "../../components/FilterBar";
import MovieList from "./MovieList";
import ReferForm from "./ReferForm";

// Temporary mock data (replace with API call later)
const mockMovies = [
  { id: 1, title: "Inception", description: "Sci-fi thriller", isReferred: true },
  { id: 2, title: "Avatar", description: "Epic adventure", isReferred: false },
  { id: 3, title: "Interstellar", description: "Space exploration", isReferred: false },
];

const Booking = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [movies, setMovies] = useState(mockMovies);
  const [showReferForm, setShowReferForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRefer = (movie) => {
    setSelectedMovie(movie);
    setShowReferForm(true);
  };

  const handleCloseForm = () => {
    setShowReferForm(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🎟 Booking</h1>
      <FilterBar selected={selectedFilter} setSelected={setSelectedFilter} />
      <MovieList
        movies={movies}
        filter={selectedFilter}
        onRefer={handleRefer}
      />
      {showReferForm && (
        <ReferForm movie={selectedMovie} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default Booking;
