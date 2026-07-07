import { useEffect, useState } from "react";

import api from "../../services/api";

import Hero from "../../components/Hero/Hero.jsx";
import EntityCard from "../../components/EntityCard/EntityCard";

import "./Characters.css";

function Characters(){

    const [characters,setCharacters]=useState([]);

    useEffect(()=>{

        api.get("characters/")
        .then((response)=>{

            setCharacters(response.data.results);

        });

    },[]);

    return(

        <>

            <h1>Personagens</h1>

            <div className="characters-grid">

                {characters.map(character=>(

                    <EntityCard

                        key={character.id}

                        character={character}

                    />

                ))}

            </div>

        </>

    );

}

export default Characters;