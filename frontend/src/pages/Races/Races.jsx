import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import RaceCard from "../../components/RaceCard/RaceCard";

import "./Races.css";

function Races() {

    const [races, setRaces] = useState([]);

    useEffect(() => {

        api.get("races/")
            .then((response) => {

                setRaces(response.data.results);

            });

    }, []);

    return (

        <>

            <Navbar />

            <section className="races-grid">

                {races.map(race => (

                    <RaceCard
                        key={race.id}
                        race={race}
                    />

                ))}

            </section>

        </>

    );

}

export default Races;