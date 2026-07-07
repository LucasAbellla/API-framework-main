import "./RaceDetails.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import api from "../../services/api";

function RaceDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [race, setRace] = useState(null);

    useEffect(() => {

        api.get(`races/${id}/`)
            .then((response) => {

                setRace(response.data);

            });

    }, [id]);

    if (!race) {

        return <h2>Carregando...</h2>;

    }

    return (

        <>

            <Navbar />

            <div className="race-page">

                <div className="race-header">

                    {race.image && (

                        <img
                            src={race.image}
                            alt={race.name}
                        />

                    )}

                    <div>

                        <h1>{race.name}</h1>

                        <p>{race.description}</p>

                    </div>

                </div>

                <section className="race-characters">

                    <h2>Personagens desta raça</h2>

                    <div className="character-list">

                        {race.characters.length === 0 ? (

                            <p>Nenhum personagem cadastrado.</p>

                        ) : (

                            race.characters.map(character => (

                                <div
                                    className="character-card"
                                    key={character.id}
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

                            ))

                        )}

                    </div>

                </section>

            </div>

        </>

    );

}

export default RaceDetails;