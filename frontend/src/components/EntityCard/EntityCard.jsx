import "./EntityCard.css";

const TYPE_COLORS = {
    Flama: "#ff5b2e",
    Aqua: "#38bdf8",
    Terrae: "#57b26d",
    Eol: "#7dd3fc",
    Crelix: "#bde7ff",
    Fulmen: "#ffd54a",
    Lux: "#ffffff",
    Umbra: "#0b132b",
    Vita: "#ff4d5d",
    Toxi: "#71ff63",
    Vis: "#d8b35f",
    Inzurvitus: "#4b1d78",
};

function EntityCard({ character }) {

    const runeColor =
        TYPE_COLORS[character.character_type] || "#999999";

    return (

        <article
            className="entity-card"
            style={{
                "--rune-color": runeColor,
            }}
        >

            <div className="entity-image">

                <div className="entity-aura"></div>

                {character.image ? (

                    <img
                        src={character.image}
                        alt={character.name}
                    />

                ) : (

                    <div className="image-placeholder">
                        Sem imagem
                    </div>

                )}

                <div className="entity-gradient"></div>

            </div>

            <div className="entity-content">

                <h2>{character.name}</h2>

                <h4>{character.title}</h4>

                <div className="entity-divider"></div>

                <div className="entity-info">

                    <p>
                        <strong>Tipagem</strong>
                        <span>{character.character_type}</span>
                    </p>

                    <p>
                        <strong>Raça</strong>
                        <span>{character.race?.name}</span>
                    </p>

                    <p>
                        <strong>Reino</strong>
                        <span>{character.kingdom?.name}</span>
                    </p>

                    <p>
                        <strong>Facção</strong>
                        <span>{character.faction?.name}</span>
                    </p>

                    <p>
                        <strong>Arma</strong>
                        <span>{character.weapon?.name}</span>
                    </p>

                </div>

                <button className="details-button">

                    Ver Personagem →

                </button>

            </div>

        </article>

    );

}

export default EntityCard;