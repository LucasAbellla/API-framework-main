import SelectFilter from "../SelectFilter/SelectFilter";

import "./ExplorerFilters.css";

import { useNavigate } from "react-router-dom";

function ExplorerFilters({

    types,
    races,
    kingdoms,
    factions,

    selectedType,
    setSelectedType,

    selectedRace,
    setSelectedRace,

    selectedKingdom,
    setSelectedKingdom,

    selectedFaction,
    setSelectedFaction

}) {

    return (

        <section className="explorer-filters">

            <SelectFilter

                label="TIPAGEM"

                value={selectedType}

                onChange={setSelectedType}

                options={types}

            />

            <SelectFilter

                label="RAÇA"

                value={selectedRace}

                onChange={setSelectedRace}

                options={races}

            />

            <SelectFilter

                label="REINO"

                value={selectedKingdom}

                onChange={setSelectedKingdom}

                options={kingdoms}

            />

            <SelectFilter

                label="FACÇÃO"

                value={selectedFaction}

                onChange={setSelectedFaction}

                options={factions}

            />

        </section>

    );

}

export default ExplorerFilters;