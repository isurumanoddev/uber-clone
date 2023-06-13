'use client'

import "mapbox-gl/dist/mapbox-gl.css"

import {Avatar} from "@mui/material";

import Maps from "@/pages/components/Maps";


export default function Home() {


    return (

        <div className={"flex flex-col h-screen"}>
            <Maps/>
            <div className="flex flex-col flex-1 h-40 p-3 ">
                <header className="flex basis-1/5 justify-between  px-5 py-2">
                    <img
                        src="https://media.designrush.com/inspirations/129137/conversions/_1521201517_957_UberLogoPreview-preview.jpg"
                        alt=""
                        className=" rounded w-30 h-20 object-contain "/>
                    <div className={"flex justify-center items-center text-black   "}>


                        <h1 className={"text-sm p-2 font-semibold"}>Isuru Manod</h1>
                        <Avatar src={""}/>
                    </div>
                </header>
                <div className="flex flex-row basis-1/5 justify-center  items-center ">

                    <button
                        className={"flex text-sm flex-col transform hover:scale-105 transition-all  justify-center items-center px-6 py-3   m-1   rounded-md bg-gray-200"}>
                        <img className={"h-3/5 "} src="https://i.ibb.co/cyvcpfF/uberx.png" alt=""/>
                        Ride
                    </button>
                    <button
                        className={"flex text-sm flex-col transform hover:scale-105 transition-all justify-center items-center px-6 py-3   m-1   rounded-md bg-gray-200"}>
                        <img className={"h-3/5 "} src="https://i.ibb.co/n776JLm/uberx.png" alt=""/>
                        Wheels
                    </button>
                    <button
                        className={"flex text-sm flex-col transform hover:scale-105 transition-all justify-center items-center px-6 py-3   m-1   rounded-md bg-gray-200"}>
                        <img className={"h-3/5 "} src="https://i.ibb.co/5RjchBg/uberschedule.png" alt=""/>
                        Reserve
                    </button>


                </div>
                <div className="h-20 bg-gray-200  text-2xl mt-2 rounded flex flex-col justify-center items-center transform hover:scale-102 transition">
                    <h3 className="text-xl mb-2 pl-2 self-start">Where to ? </h3>

                </div>


            </div>
        </div>


    );
}

