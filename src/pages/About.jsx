import { NavLink } from "react-router-dom";

export const About = () => {
    return (
        <main className="about-page">
            <div className="about-container">
                <div className="about-content">
                    <p className="about-eyebrow">Our Mission</p>
                    <h1 className="about-heading">Bringing the Magic of Cinema to You</h1>
                    <p className="about-text">
                        WatchIt was born from a passion for storytelling. We believe that movies are more than just entertainment; they are a gateway to different worlds, perspectives, and emotions. Our mission is to create the ultimate platform for film lovers to discover, discuss, and enjoy the art of cinema.
                    </p>
                    <ul className="features-list">
                        <li><span className="icon">✔</span> Curated collections from every genre.</li>
                        <li><span className="icon">✔</span> Up-to-the-minute news and reviews.</li>
                        <li><span className="icon">✔</span> A vibrant community of movie enthusiasts.</li>
                    </ul>
                    <NavLink to="/contact" className="about-btn">
                        Get In Touch
                    </NavLink>
                </div>
                <div className="about-image-container">
                    <img src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1931&auto=format&fit=crop" alt="Cinema seating" />
                </div>
            </div>
        </main>
    );
};