import "./FactionDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import api from "../../services/api";

function FactionDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [faction, setFaction] = useState(null);

    useEffect(() => {

        api.get(`factions/${id}/`)
            .then((response) => {

                setFaction(response.data);

            });

    }, [id]);

    if (!faction)

        return <h2>Carregando...</h2>;

    return (

        <>

            <Navbar />

            <div className="faction-page">

                <div className="faction-header">

                    {faction.image && (

                        <img

                            src={faction.image}

                            alt={faction.name}

                        />

                    )}

                    <div>

                        <h1>{faction.name}</h1>

                        <h3>{faction.kingdom}</h3>

                        <h4>Líder: {faction.leader}</h4>

                        <p>

                            {faction.description}

                        </p>

                    </div>

                </div>

                <section className="faction-members">

                    <h2>Personagens</h2>

                    <div className="character-list">

                        {faction.characters.map(character => (

                            <div

                                key={character.id}

                                className="character-card"

                                onClick={() => navigate(`/characters/${character.id}`)}

                            >

                                {character.image && (

                                    <img

                                        src={character.image}

                                        alt={character.name}

                                    />

                                )}

                                <h3>{character.name}</h3>

                                <p>{character.title}</p>

                            </div>

                        ))}

                    </div>

                </section>

            </div>

        </>

    );

}

export default FactionDetails;