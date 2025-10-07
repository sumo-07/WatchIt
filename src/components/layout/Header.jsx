import { NavLink } from "react-router-dom";

export const Header = () => {
    const getNavLinkStyle = ({isActive}) => {
        return {
            color: isActive ? "green" : "black"
        }
    };

    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>ShareBuddy</p>
                        </div>
                        <div className="signin_up">
                            <NavLink to="#">Sign in</NavLink>
                            <NavLink to="#">Sign up</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="/" ><p>WatchIt</p></NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            {/* <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"
                                }>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" style={({isActive}) => {
                                    return {
                                        color: isActive ? "yellow" : "black"
                                    }
                                }}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>Movies</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};