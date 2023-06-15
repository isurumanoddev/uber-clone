import React from 'react';

function RideSelector() {


    return (
        <div>
            <div className="flex justify-center items-center text-xs py-2">Choose a ride ,or swipe up fore more</div>
            <div className="h-16 p-1 bg-red-100 flex items-center justify-between">
                <div className="p-1">
                    Vehicle
                </div>
                <h4 className={"pr-2 font-semibold text-sm"}>$ 100.00</h4>
            </div>
        </div>

    );
}

export default RideSelector;


