'use client'


import mapboxgl from "!mapbox-gl"
import {useEffect} from "react";


mapboxgl.accessToken = 'pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw'

function Maps({pickupCoordinates, dropoffCoordinates}) {


    useEffect(() => {

        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [80.4912, 6.9271],
            zoom: 7.5
        });

        if (pickupCoordinates) {

            addToMap(map, pickupCoordinates)

        }
        if (dropoffCoordinates) {

            addToMap(map, dropoffCoordinates)

        }
        if (pickupCoordinates && dropoffCoordinates) {



            try {
                map.fitBounds([
                    pickupCoordinates ? pickupCoordinates : [78.4912, 6.9271], dropoffCoordinates ? dropoffCoordinates : [80.4912, 6.9271]
                ], {
                    padding: 50
                })
            }catch (e) {
                console.log(e)

            }

        }


    }, [pickupCoordinates, dropoffCoordinates]);


    const addToMap = (map, coordinates) => {

        const marker1 = new mapboxgl.Marker()
            .setLngLat([coordinates[0] ? coordinates[0] : 79.4912, coordinates[1] ? coordinates[1] : 6.9271]) // Specify the coordinates of the marker
            .addTo(map);

    }

    return (
        <div className={"flex-1"} id={"map"}></div>
    );
}

export default Maps;
