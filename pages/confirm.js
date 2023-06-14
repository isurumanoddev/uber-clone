import React, {useEffect, useState} from 'react';

import "mapbox-gl/dist/mapbox-gl.css"


import Maps from "@/pages/components/Maps";



function Confirm() {

    const [pickupCoordinates,setPickupCoordinates] = useState([])
    const [dropoffCoordinates,setDropoffCoordinates] = useState([])

    const getPickup =async () => {

        const pickUp = "colombo"


         const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` + new URLSearchParams({
             access_token: "pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw",
             limit:1,
         }))
        const data =await response.json()


        setPickupCoordinates(data["features"][0].center)
    }

    const getDropoff =async () => {

        const dropOff = "kandy"


         const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` + new URLSearchParams({
             access_token: "pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw",
             limit:1,
         }))
        const data =await response.json()


        setDropoffCoordinates(data["features"][0].center)
    }


    useEffect(() => {
        getPickup()
        getDropoff()
    }, [])




    return (<div className={"flex flex-col h-screen"}>
        <Maps
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}

        />
        <div className="flex flex-col flex-1">
            <div className="flex flex-col basis-4/5  overflow-y-scroll">

                <h1 className="p-4 text-3xl">location 1 </h1>
                {pickupCoordinates.map(value => (

                    <h1 className="p-4 text-3xl">{value}</h1>
                ))}
                <h1 className="p-4 text-3xl">location 2 </h1>
                {dropoffCoordinates.map(value => (

                    <h1 className="p-4 text-3xl">{value}</h1>
                ))}
            </div>
            <div className={"basis-1/5 bg-amber-50 flex justify-center items-center p-3"}>
                <button className=" bg-black text-white w-full py-3 rounded transition  ">Confirm UberX
                </button>
            </div>

        </div>


    </div>);
}

export default Confirm;
