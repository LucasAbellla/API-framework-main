import { useEffect, useState } from "react";

import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import KingdomCard from "../../components/KingdomCard/KingdomCard";

import "./Kingdoms.css";

function Kingdoms() {

    const [kingdoms,setKingdoms] = useState([]);

    useEffect(()=>{

        api.get("kingdoms/")
        .then((response)=>{

            setKingdoms(response.data.results);

        });

    },[]);

    return(

        <>

            <Navbar/>

            <section className="characters-grid">

                {

                    kingdoms.map(kingdom=>(

                        <KingdomCard

                            key={kingdom.id}

                            kingdom={kingdom}

                        />

                    ))

                }

            </section>

        </>

    );

}

export default Kingdoms;