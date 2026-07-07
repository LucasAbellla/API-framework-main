import { useEffect, useMemo, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import ExplorerFilters from "../../components/ExplorerFilters/ExplorerFilters";
import EntityCard from "../../components/EntityCard/EntityCard";

import "./Characters.css";

function Characters() {

    const [characters, setCharacters] = useState([]);

    const [races, setRaces] = useState([]);
    const [kingdoms, setKingdoms] = useState([]);
    const [factions, setFactions] = useState([]);

    const [selectedType, setSelectedType] = useState("");
    const [selectedRace, setSelectedRace] = useState("");
    const [selectedKingdom, setSelectedKingdom] = useState("");
    const [selectedFaction, setSelectedFaction] = useState("");

    useEffect(() => {

        Promise.all([

            api.get("characters/"),
            api.get("races/"),
            api.get("kingdoms/"),
            api.get("factions/")

        ])
            .then(([charactersRes, racesRes, kingdomsRes, factionsRes]) => {

                setCharacters(charactersRes.data.results);
                setRaces(racesRes.data.results);
                setKingdoms(kingdomsRes.data.results);
                setFactions(factionsRes.data.results);

            })
            .catch(console.error);

    }, []);

    const types = useMemo(() => {

        return [...new Set(characters.map(c => c.character_type))]
            .filter(Boolean)
            .sort()
            .map(type => ({
                id: type,
                name: type
            }));

    }, [characters]);

    const filteredCharacters = characters.filter(character => {

        if (
            selectedType &&
            character.character_type !== selectedType
        ) return false;

        if (
            selectedRace &&
            character.race?.id !== Number(selectedRace)
        ) return false;

        if (
            selectedKingdom &&
            character.kingdom?.id !== Number(selectedKingdom)
        ) return false;

        if (
            selectedFaction &&
            character.faction?.id !== Number(selectedFaction)
        ) return false;

        return true;

    });

    const openCharacter = (character) => {

        console.log(character);

    };

    return (

        <>

            <Navbar />

            <ExplorerFilters

                types={types}
                races={races}
                kingdoms={kingdoms}
                factions={factions}

                selectedType={selectedType}
                setSelectedType={setSelectedType}

                selectedRace={selectedRace}
                setSelectedRace={setSelectedRace}

                selectedKingdom={selectedKingdom}
                setSelectedKingdom={setSelectedKingdom}

                selectedFaction={selectedFaction}
                setSelectedFaction={setSelectedFaction}

            />

            <section className="characters-grid">

                {filteredCharacters.map(character => (

                    <EntityCard

                        key={character.id}
                        character={character}
                        onOpen={openCharacter}

                    />

                ))}

            </section>

        </>

    );

}

export default Characters;