import "./Navbar.css";

function Navbar(){

    return(

        <header className="navbar">

            <div className="navbar-container">

                <h2>ECLIPTARI</h2>

                <nav>

                    <a href="#">Personagens</a>

                    <a href="#">Reinos</a>

                    <a href="#">Facções</a>

                    <a href="#">Raças</a>

                    <a href="#">Armas</a>

                    <a href="#">Magias</a>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;