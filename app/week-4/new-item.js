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
        <div>
            <p>Current quantity: {quantity}</p>
            <button onClick={decrement} disabled={!isDecEnabled}>Decrease</button>
            <button onClick={increment} disabled={!isIncEnabled}>Add</button>
        </div>
    )
}