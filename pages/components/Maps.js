'use client'

import tw from "tailwind-styled-components";

import mapboxgl from "!mapbox-gl"
import {useEffect} from "react";

mapboxgl.accessToken = 'pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw'

function Maps() {
     useEffect(() => {

        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [ 80.4912,6.9271],
            zoom:7.5
        });
    });

    return (
       <div className={"flex-1"} id={"map"}> </div>
    );
}

export default Maps;
