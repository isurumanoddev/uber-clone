import React, {useEffect, useState} from 'react';
import CarOption from "@/pages/components/CarOption";
import {carlist} from "@/pages/data/carList";

function RideSelector({pickup, dropoff}) {



    const basePrice = 300

    const [rideDuration, setRideDuration] = useState(0)


    const getDirections = (pick, drop) => {
        try {
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pick[0]},${pick[1]};${drop[0]},${drop[1]}?` +
                new URLSearchParams({
                    access_token: 'pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw',
                }))
                .then(response => response.json())

                .then(data =>setRideDuration(data.routes[0]?.distance / 1000))
        }
        catch (e) {
            console.log("error  : ",e)
        }
    }
    console.log("rideDuration  : ",rideDuration)

    useEffect(() => {
        if (pickup && dropoff) {
            getDirections(pickup,dropoff)
        }

    }, [pickup,dropoff])

    return (<div>

            {carlist.map((item, index) => (<CarOption key={index} name={item.service} image={item.imgUrl}
                                                      price={basePrice * rideDuration * item.multiplier}/>))}


        </div>

    );
}

export default RideSelector;

