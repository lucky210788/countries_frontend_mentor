import React, {useEffect, useState} from "react";
import {searchByCountry} from "../../config";
import {IoArrowBack} from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";
import {CountryI} from "../../types";
import Info from "../Info";
import {Button} from "../Button";


const Details: React.FC = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState<CountryI | null>(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]));
    }, [name]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && <Info navigate={navigate} {...country} />}
        </div>
    );
}

export default Details;