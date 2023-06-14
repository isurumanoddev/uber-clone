'use client'


import mapboxgl from "!mapbox-gl"
import {useEffect} from "react";

mapboxgl.accessToken = 'pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw'

function Maps() {
    useEffect(() => {

        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [80.4912, 6.9271],
            zoom: 7.5
        });

        addToMap(map)




    });
     const addToMap = (map) => {
            const marker1 = new mapboxgl.Marker()
                .setLngLat([79.8449, 6.9238]) // Specify the coordinates of the marker
                .addTo(map);
        }

    return (
        <div className={"flex-1"} id={"map"}></div>
    );
}

export default Maps;
