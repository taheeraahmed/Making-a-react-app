import React, { useState, useEffect } from "react";
import './ImageGenerator.css';

const ImageGenerator = () => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch("https://random-stuff-api.p.rapidapi.com/image/dog?api_key=9x5tzRh2biG2", {
            "method": "GET",
            "headers": {
                "x-api-key": "9x5tzRh2biG2",
                "x-rapidapi-host": "random-stuff-api.p.rapidapi.com",
                "x-rapidapi-key": "ab27a62f4amsheb4d10ce4612b29p10aa98jsn67c9fc452783"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setImage(data[0]);
            })
    }, []);

    return (
        <div className="image">
            <img src={image} alt="Cute dog"/>

        </div>
    );
};

export default ImageGenerator;