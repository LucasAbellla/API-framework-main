import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

import Characters from "./pages/Characters/Characters";

function App(){

    return(

        <>

            <Navbar/>

            <Layout>

                <Characters/>

            </Layout>

        </>

    );

}

export default App;