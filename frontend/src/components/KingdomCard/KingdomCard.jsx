import { Link } from "react-router-dom";

import "./KingdomCard.css";

function KingdomCard({ kingdom }) {

    return (

        <article className="kingdom-card">

            <div className="kingdom-image">

                {kingdom.image ? (

                    <img
                        src={kingdom.image}
                        alt={kingdom.name}
                    />

                ) : (

                    <div className="image-placeholder">

                        {kingdom.name[0]}

                    </div>

                )}

            </div>

            <div className="kingdom-content">

                <h2>{kingdom.name}</h2>

                <h4>{kingdom.title}</h4>

                <p>

                    {kingdom.description
                        ? kingdom.description.substring(0,120) + "..."
                        : "Nenhuma descrição cadastrada."}

                </p>

                <Link
                    to={`/kingdoms/${kingdom.id}`}
                    className="details-button"
                >

                    Ver Compêndio →

                </Link>

            </div>

        </article>

    );

}

export default KingdomCard;