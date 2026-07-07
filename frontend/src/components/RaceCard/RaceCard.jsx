import "./RaceCard.css";

import { useNavigate } from "react-router-dom";

function RaceCard({ race }) {

    const navigate = useNavigate();

    return (

        <article className="race-card">

            <div className="race-image">

                {race.image ? (

                    <img
                        src={race.image}
                        alt={race.name}
                    />

                ) : (

                    <div className="image-placeholder">

                        Sem imagem

                    </div>

                )}

            </div>

            <div className="race-content">

                <h2>{race.name}</h2>

                <p>

                    {race.description
                        ? race.description.substring(0, 150) + "..."
                        : "Sem descrição."}

                </p>

                <button
                    className="details-button"
                    onClick={() => navigate(`/races/${race.id}`)}
                >

                    Ver Compêndio →

                </button>

            </div>

        </article>

    );

}

export default RaceCard;