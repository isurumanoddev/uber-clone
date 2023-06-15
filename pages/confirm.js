import React, {useEffect, useState} from 'react';

import "mapbox-gl/dist/mapbox-gl.css"


import Maps from "@/pages/components/Maps";

import {useRouter} from "next/router";
import RideSelector from "@/pages/components/RideSelector";
import Link from "next/link";
import {IconButton} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";


function Confirm() {

    const router = useRouter()

    const {location_1, location_2} = router.query


    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

    const getPickup = async () => {

        const pickUp = location_1


        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw",
            limit: 1,
        }))
        const data = await response.json()


        setPickupCoordinates(data["features"][0].center)
    }

    const getDropoff = async () => {

        const dropOff = location_2


        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiaXN1cnVtYW5vZCIsImEiOiJjbGlzdW84MWcwaWY2M2VvejNzbGR0NnNuIn0.FNwzFhyS3DnoRTMNEkgeyw",
            limit: 1,
        }))
        const data = await response.json()


        setDropoffCoordinates(data["features"][0].center)
    }


    useEffect(() => {
        getPickup()
        getDropoff()
    }, [])


    return (<div className={"flex flex-col h-screen"}>
         <div className={"absolute top-0 left-0 right-0 z-10"}>
                <Link href={"/search"}>

                    <IconButton className={"m-2 bg-gray-200  transition text-sm"}>
                        <ArrowBack className={"text-black font-bold text-xl"}/>
                    </IconButton>

                </Link>
            </div>
        <Maps
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}

        />
        <div className="flex flex-col flex-1 h-1/2">
            <div className="flex justify-center items-center text-xs py-2 border-b text-opacity-40">Choose a ride ,or
                swipe up fore
                more
            </div>
            <div className="flex flex-col basis-4/5  overflow-y-scroll scrollbar-hide">


                <RideSelector pickup={pickupCoordinates} dropoff={dropoffCoordinates}/>


            </div>
            <div className={"basis-1/5  flex justify-center items-center p-3 border-t-2"}>
                <button className=" bg-black text-white w-full py-3 rounded transition  ">Confirm UberX
                </button>
            </div>

        </div>


    </div>);
}

export default Confirm;
