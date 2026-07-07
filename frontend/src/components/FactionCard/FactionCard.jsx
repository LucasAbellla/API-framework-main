import "./FactionCard.css";

import { useNavigate } from "react-router-dom";

function FactionCard({ faction }) {

    const navigate = useNavigate();

    return (

        <article className="faction-card">

            <div className="faction-image">

                {faction.image ? (

                    <img
                        src={faction.image}
                        alt={faction.name}
                    />

                ) : (

                    <div className="image-placeholder">

                        Sem imagem

                    </div>

                )}

            </div>

            <div className="faction-content">

                <h2>{faction.name}</h2>

                <h4>{faction.kingdom}</h4>

                <p>

                    {faction.description
                        ? faction.description.substring(0, 150) + "..."
                        : "Sem descrição."}

                </p>

                <button
                    className="details-button"
                    onClick={() => navigate(`/factions/${faction.id}`)}
                >

                    Ver Compêndio →

                </button>

            </div>

        </article>

    );

}

export default FactionCard;