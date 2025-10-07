import { NavLink, useLoaderData, useParams } from "react-router-dom";
import "./MovieDetails.css";
export const MovieDetails = () => {
    // const params= useParams();
    // console.log("params= ",params)

    const movieData = useLoaderData();
    console.log("movie= ",movieData);

    // const {poster,imdbID}= movieData;



    return (
        <>
            <li className="movie-card">
                <div className="card-poster-container">
                    <img src={movieData["#IMG_POSTER"]} alt={`Poster for ${movieData["#TITLE"]}`} />
                </div>
                <div className="card-content-container">
                    <h3 className="card-title">{movieData["#TITLE"]}</h3>
                    <p className="card-details">Year: {movieData["#YEAR"]}</p>
                    <p className="card-details">Actors: {movieData["#ACTORS"]}</p>
                    <p className="card-details">Rank: {movieData["#RANK"]}</p>
                </div>
                <NavLink to={movieData["#IMDB_URL"]}>
                    <button className="watch-now-btn">Watch Now</button>
                </NavLink>
            </li>
        </>
    );
};