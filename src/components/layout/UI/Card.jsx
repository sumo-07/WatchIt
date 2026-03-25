import { NavLink } from "react-router-dom";

export const Card = ({ currMovie,query }) => {
    return (
        <li className="hero-conatiner">
            <div className="main-container"><div className="poster-container">
                <img src={currMovie.Poster} alt={currMovie.Title} /></div>
                <div className="ticket-container">
                    <div className="ticket-content">
                        <NavLink to={`/movie/${currMovie.imdbID}?q=${query || "Avengers"}`}>
                            <button className="tickey-buy-btn">Watch Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </li>
    );
};