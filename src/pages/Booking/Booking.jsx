import React, { useState } from "react";
import MovieList from "./MovieList";
import ReferForm from "./ReferForm";
import "./Booking.css";

// Example movie data with images
const mockMovies = [
  {
    id: 1,
    title: "Inception",
    description: "Sci-fi thriller",
    isReferred: true,
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    id: 2,
    title: "Avatar",
    description: "Epic adventure",
    isReferred: false,
    image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "Space exploration",
    isReferred: false,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  }
];

const Booking = () => {
  const [movies] = useState(mockMovies);

  const [showReferForm, setShowReferForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRefer = (movie) => {
    setSelectedMovie(movie);
    setShowReferForm(true);
  };

  const handleBook = (movie) => {
    alert(`You booked "${movie.title}"!`);
  };

  const handleCloseForm = () => {
    setShowReferForm(false);
    setSelectedMovie(null);
  };

  return (
    <div className="booking-root">
      <div className="booking-header">
        <h1 className="booking-title">🎟 Book Your Movie</h1>
        <p className="booking-desc">
          Discover, book, and refer the latest movies with <b>CineConnect</b>.
        </p>
      </div>
      <MovieList
        movies={movies}
        onRefer={handleRefer}
        onBook={handleBook}
      />
      {showReferForm && (
        <ReferForm
          movie={selectedMovie}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Booking;
