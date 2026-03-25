import { NavLink, useLoaderData } from "react-router-dom";
import "./MovieDetails.css";

export const MovieDetails = () => {

    const movieData = useLoaderData();
    console.log("movie= ", movieData);


    return (
        <div className="details-wrapper">

            <div className="movie-card">

                {/* Poster */}
                <div className="card-poster-container">
                    <img
                        src={movieData.Poster !== "N/A" ? movieData.Poster : "/no-image.png"}
                        alt={movieData.Title}
                    />
                </div>

                {/* Content */}
                <div className="card-content-container">

                    <h2 className="card-title">{movieData.Title}</h2>

                    <div className="info-grid">
                        <p><strong>Year:</strong> {movieData.Year}</p>
                        <p><strong>Genre:</strong> {movieData.Genre}</p>
                        <p><strong>Actors:</strong> {movieData.Actors}</p>
                        <p><strong>Director:</strong> {movieData.Director}</p>
                        <p><strong>Rating:</strong> ⭐ {movieData.imdbRating}</p>
                        <p><strong>Runtime:</strong> {movieData.Runtime}</p>
                    </div>

                    <p className="plot">
                        <strong>Description:</strong> {movieData.Plot}
                    </p>

                </div>

                {/* ✅ Hover Button */}
                <NavLink
                    to={`https://www.imdb.com/title/${movieData.imdbID}`}
                    target="_blank"
                >
                    <button className="watch-now-btn">
                        View on IMDb
                    </button>
                </NavLink>

            </div>

        </div>
    );
};