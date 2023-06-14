import React from 'react';

import "mapbox-gl/dist/mapbox-gl.css"


import Maps from "@/pages/components/Maps";
import Link from "next/link";


function Confirm() {
    return (
        <div className={"flex flex-col h-screen"}>
            <Maps/>
            <div className="flex flex-col flex-1">
                <div className="flex flex-col basis-4/5 bg-amber-800 overflow-y-scroll">
                    <h1 className="p-4 text-3xl">Hello</h1>
                    <h1 className="p-4 text-3xl">Hello</h1>
                </div>
                <div className={"basis-1/5 bg-amber-100 flex justify-center items-center p-3"}>
                    <button className=" bg-black text-white w-full py-3 rounded transition  ">Confirm UberX
                    </button>
                </div>

            </div>


        </div>
    )
        ;
}

export default Confirm;
