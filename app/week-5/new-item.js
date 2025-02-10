"use client"

import { useState } from 'react';

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);
    const [isIncEnabled, setIsIncEnabled] = useState(true);
    const [isDecEnabled, setIsDecEnabled] = useState(true);
    
    const toggleInc=()=>{
        setIsIncEnabled(!isIncEnabled);
    }

    const toggleDec=()=>{
        setIsDecEnabled(!isDecEnabled);
    }

    const increment=()=>{
        if(quantity==20)
        {
            toggleInc;
        }
        else
        {
            if(!isIncEnabled)
            {
                toggleInc;
                setQuantity(quantity+1);
            }
            else
            {
                setQuantity(quantity+1);
            }
        }
    }

    const decrement=()=>{
        if(quantity==1)
        {
            toggleDec;
        }
        else
        {
            if(!isDecEnabled)
            {
                toggleDec;
                setQuantity(quantity-1);
            }
            else
            {
                setQuantity(quantity-1);
            }
        }
    }
    

    return(
        <div className="flex flex-col justify-center">
            <p className="text-center flex-1 pt-10">Current Quantity: {quantity}</p>
            <section className="flex mt-5">
                <button className="font-bold bg-gray-300 border-blue-400 rounded-md flex-1 border-2 text-red-400 ml-60 mr-5 py-3 px-15" onClick={decrement} disabled={!isDecEnabled}>Decrease</button>
                <button className="font-bold bg-gray-300 border-blue-400 rounded-md flex-1 border-2 text-green-400 mr-60 ml-5 py-3 px-15"onClick={increment} disabled={!isIncEnabled}>Increase</button>
            </section>
        </div>
    )
}