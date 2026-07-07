import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import FactionCard from "../../components/FactionCard/FactionCard";

import "./Factions.css";

function Factions() {

    const [factions, setFactions] = useState([]);

    useEffect(() => {

        api.get("factions/")
            .then((response) => {

                setFactions(response.data.results);

            });

    }, []);

    return (

        <>

            <Navbar />

            <section className="factions-grid">

                {factions.map(faction => (

                    <FactionCard

                        key={faction.id}

                        faction={faction}

                    />

                ))}

            </section>

        </>

    );

}

export default Factions;