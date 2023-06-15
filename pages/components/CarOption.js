import React from 'react';

function CarOption({name,image,price}) {
    return (
        <div className="h-16 p-1  flex items-center justify-between ">
            <div className="flex justify-between items-center px-4 gap-4">
                <img src={image} className={"w-12"} alt=""/>
                <div className="flex flex-col gap-0.5 py-4">
                    <h4 className={"font-semibold text-sm"}>{name}</h4>
                    <p className="text-xs text-sky-500">5 min away</p>
                </div>
            </div>
            <h4 className={"pr-2 font-semibold text-xs"}>$ {price.toFixed(2)}</h4>
        </div>
    );
}

export default CarOption;