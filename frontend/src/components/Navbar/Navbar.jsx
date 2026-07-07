import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import "./Navbar.css";

function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar-container">

                <Link
                    to="/"
                    className="navbar-logo"
                >
                    ECLIPTARI
                </Link>

                <SearchBar />

                <nav>

                    <Link to="/">Personagens</Link>

                    <Link to="/Kingdoms">Reinos</Link>

                    <Link to="/Races">Raças</Link>

                    <Link to="/Factions">Facções</Link>

                    <Link to="/Types">Tipagem</Link>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;