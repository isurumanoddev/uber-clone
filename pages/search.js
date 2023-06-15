'use client'

import React, {useState} from 'react';
import {Add, ArrowBack, PlusOne, Stars} from "@mui/icons-material";
import Link from "next/link";
import {IconButton} from "@mui/material";

function Search() {

    const [location_1, setLocation_1] = useState("")
    const [location_2, setLocation_2] = useState("")

    console.log("location_1 : ", location_1)
    console.log("location_2 : ", location_2)


    return (


        <div className={"container h-screen bg-gray-100 flex flex-col gap-2"}>
            <div className={"bg-white"}>
                <Link href={"/"}>

                    <IconButton className={"m-2 bg-gray-100"}>
                        <ArrowBack className={"text-black font-semibold"}/>
                    </IconButton>

                </Link>
            </div>
            <div className="p-4 flex flex-row items-center bg-white">
                <div className={"w-8 m-2"}>
                    <img src="" alt="" className="w-10"/>
                </div>
                <div className="flex flex-col w-full gap-3 flex-1">
                    <input value={location_1} onChange={event => setLocation_1(event.target.value)}
                           className="px-3 py-2 w-full bg-gray-200 rounded text-sm outline-none"
                           placeholder={"Enter pickup location"}/>
                    <input value={location_2} onChange={event => setLocation_2(event.target.value)}
                           className="px-3 py-2 w-full bg-gray-200 rounded text-sm outline-none"
                           placeholder={"Enter pickup location"}/>
                </div>
                <div className={"w-8 m-2"}>
                    <IconButton className={"m-2 bg-gray-100"}>
                        <Add className={"text-black font-semibold text-2xl"}/>
                    </IconButton>
                </div>
            </div>
            <div className="w-full py-3 p-2 pl-5 flex gap-2 bg-white">
                <Stars fontSize={"medium"}/>
                <p className="pl-2">Saved Places</p>
            </div>

            <Link href={{
                pathname:"/confirm",
                query:{
                    location_1:location_1,
                    location_2:location_2,
                }

            }}>
                <div className="w-full p-2 flex gap-2">
                    <button className="m-3 bg-black text-white w-full py-2 rounded transition  ">Confirm Location
                    </button>
                </div>
            </Link>


        </div>
    );
}

export default Search;
