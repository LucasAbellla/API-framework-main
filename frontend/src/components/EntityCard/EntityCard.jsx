import "./EntityCard.css";

function EntityCard({ character }) {

    return (

        <article className="entity-card">

            <div className="entity-image">

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

            </div>

            <div className="entity-content">

                <h2>{character.name}</h2>

                <h3>{character.title}</h3>

                <div className="entity-info">

                    <span><strong>Raça:</strong> {character.race}</span>

                    <span><strong>Reino:</strong> {character.kingdom}</span>

                    <span><strong>Facção:</strong> {character.faction}</span>

                    <span><strong>Arma:</strong> {character.weapon}</span>

                    <span><strong>Tipagem:</strong> {character.character_type}</span>

                </div>

            </div>

        </article>

    );

}

export default EntityCard;