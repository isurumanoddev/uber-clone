import React from 'react';
import CarOption from "@/pages/components/CarOption";
import {carlist} from "@/pages/data/carList";

function RideSelector() {
    const basePrice = 80

    return (
        <div>
            <div className="flex justify-center items-center text-xs py-2 border-b">Choose a ride ,or swipe up fore
                more
            </div>
            {
                carlist.map(item => (
                    <CarOption name={item.service} image={item.imgUrl} price={basePrice * item.multiplier} />))
            }


        </div>

    );
}

export default RideSelector;


