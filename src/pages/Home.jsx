import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <p className="hero-eyebrow">Explore the Latest in Movie Industries</p>
                <h1 className="hero-heading">Unlimited Movie, TVs Shows, & More.</h1>
                <p className="hero-subheading">
                    Discover the Top Best Movies and Dramas with a catchy subtitle like Your Ultimate Guide to Must-Watch Content.
                </p>
                {/* This NavLink will navigate to the /movie route when clicked */}
                <NavLink to="/movie" className="hero-btn">
                    Explore Now
                </NavLink>
            </div>
        </section>
    );

};