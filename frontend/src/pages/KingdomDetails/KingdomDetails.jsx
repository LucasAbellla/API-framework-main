import "./KingdomDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function KingdomDetails() {

    const { id } = useParams();

    const [kingdom, setKingdom] = useState(null);

    useEffect(() => {

        api.get(`kingdoms/${id}/`)
            .then((response) => {

                setKingdom(response.data);

            });

    }, [id]);

    if (!kingdom) {

        return <h2>Carregando...</h2>;

    }

    return (

        <div className="character-page">

            <div className="hero">

                {kingdom.image && (

                    <img
                        src={kingdom.image}
                        alt={kingdom.name}
                    />

                )}

                <div>

                    <h1>{kingdom.name}</h1>

                    <h2>{kingdom.title}</h2>

                </div>

            </div>

            <section>

                <h3>Descrição</h3>

                <p>{kingdom.description}</p>

            </section>

            <section>

                <h3>História</h3>

                <p>{kingdom.history}</p>

            </section>

            <section>

                <h3>Informações</h3>

                <p><strong>Capital:</strong> {kingdom.capital}</p>

                <p><strong>Governante:</strong> {kingdom.ruler}</p>

            </section>

            {kingdom.characters?.length > 0 && (

                <section>

                    <h3>Personagens</h3>

                    <div className="characters-list">

                        {kingdom.characters.map(character => (

                            <div
                                key={character.id}
                                className="character-item"
                            >

                                {character.image && (

                                    <img
                                        src={character.image}
                                        alt={character.name}
                                    />

                                )}

                                <h4>{character.name}</h4>

                                <p>{character.title}</p>

                            </div>

                        ))}

                    </div>

                </section>

            )}

        </div>

    );

}

export default KingdomDetails;