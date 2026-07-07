import { Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters/Characters";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";

import Kingdoms from "./pages/Kingdoms/Kingdoms";
import KingdomDetails from "./pages/KingdomDetails/KingdomDetails";

import Races from "./pages/Races/Races";
import RaceDetails from "./pages/RaceDetails/RaceDetails";

import Factions from "./pages/Factions/Factions";
import FactionDetails from "./pages/FactionDetails/FactionDetails";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Characters />}
            />

            <Route
                path="/characters/:id"
                element={<CharacterDetails />}
            />

            <Route
                path="/kingdoms"
                element={<Kingdoms />}
            />

            <Route
                path="/kingdoms/:id"
                element={<KingdomDetails />}
            />

            <Route
                path="/races"
                element={<Races />}
            />

            <Route
                path="/races/:id"
                element={<RaceDetails />}
            />
            <Route
                path="/factions"
                element={<Factions />}
            />
            <Route
                path="/factions/:id"
                element={<FactionDetails />}
            />

        </Routes>

    );

}

export default App;