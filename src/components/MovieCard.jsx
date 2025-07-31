import React from "react";

const MovieCard = ({ movie, onRefer }) => {
  return (
    <div className="bg-white rounded shadow-md p-4 w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{movie.description}</p>
      <p className="text-sm">
        <strong>Status:</strong>{" "}
        {movie.isReferred ? "Referred" : "Unreferred"}
      </p>
      {!movie.isReferred && (
        <button
          onClick={() => onRefer(movie)}
          className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Refer Movie
        </button>
      )}
    </div>
  );
};

export default MovieCard;
