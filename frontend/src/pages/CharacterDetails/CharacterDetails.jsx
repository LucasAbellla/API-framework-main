import "./CharacterDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";

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

function CharacterDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);

    useEffect(() => {

        api.get(`characters/${id}/`)
            .then((response) => {

                setCharacter(response.data);

            })
            .catch(console.error);

    }, [id]);

    if (!character) {

        return <h2 className="loading">Carregando...</h2>;

    }

    const runeColor =
        TYPE_COLORS[character.character_type] || "#999";

    return (

        <>

            <Navbar />

            <main
                className="character-page"
                style={{
                    "--rune-color": runeColor
                }}
            >

                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                >

                    ← Voltar ao Compêndio

                </button>

                <header className="character-hero">

                    <div className="hero-image">

                        <div className="hero-aura"></div>

                        <img
                            src={character.image}
                            alt={character.name}
                        />

                    </div>

                    <div className="hero-info">

                        <span className="hero-type">

                            {character.character_type}

                        </span>

                        <h1>{character.name}</h1>

                        <h2>{character.title}</h2>

                    </div>

                </header>

                <div className="details-grid">

                    <aside className="info-card">

                        <h3>Ficha</h3>

                        <p><strong>Raça</strong><span>{character.race?.name}</span></p>

                        <p><strong>Reino</strong><span>{character.kingdom?.name}</span></p>

                        <p><strong>Facção</strong><span>{character.faction?.name}</span></p>

                        <p><strong>Arma</strong><span>{character.weapon?.name}</span></p>

                        <p><strong>Idade</strong><span>{character.age}</span></p>

                        <p><strong>Sexo</strong><span>{character.gender}</span></p>

                        <p><strong>Altura</strong><span>{character.height} m</span></p>

                    </aside>

                    <section className="details-column">

                        <section className="details-section">

                            <h3>Personalidade</h3>

                            <p>{character.personality}</p>

                        </section>

                        <section className="details-section">

                            <h3>História</h3>

                            <p>{character.history}</p>

                        </section>

                        {character.spells?.length > 0 && (

                            <section className="details-section">

                                <h3>Magias</h3>

                                <ul>

                                    {character.spells.map((spell) => (

                                        <li key={spell.id}>

                                            {spell.name}

                                        </li>

                                    ))}

                                </ul>

                            </section>

                        )}

                    </section>

                </div>

            </main>

        </>

    );

}

export default CharacterDetails;