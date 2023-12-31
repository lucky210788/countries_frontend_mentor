import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from "../Header";
import Main from "../Main";
import NotFound from "../../pages/NotFound";
import Home from "../../pages/Home";
import {Country} from "../../types";
import Details from "../Details";

const App: React.FC = () => {
    const [countries, setCountries] = useState<Country[] | []>([]);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<Home countries={countries} setCountries={setCountries} />} />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;
