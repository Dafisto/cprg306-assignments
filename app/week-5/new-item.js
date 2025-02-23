"use client"

import { useState } from 'react';

export default function NewItem(){

    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState(1);
    const [isIncEnabled, setIsIncEnabled] = useState(true);
    const [isDecEnabled, setIsDecEnabled] = useState(true);
    
    const [category, setCategory] = useState("Produce");
    
    const toggleInc=()=>{
        setIsIncEnabled(!isIncEnabled);
    };

    const toggleDec=()=>{
        setIsDecEnabled(!isDecEnabled);
    };

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
    };

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
    };

    const handleChange =(event) => {
        setName(event.target.value());
    }

    const handleSelect =(event) => {
        setCategory(event.target.value());
    }

    const handleSubmit =()=>{
        const item ={
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(`Name: ${name} Quantity: ${quantity} Category: ${category}`);
        setName(""), setQuantity(1), setCategory("produce");
    };

    

    return(
        <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit}>
                <label for="name"></label>
                <input type="text" placeholder="Enter Item" value={name} onChange={handleChange} />
                <p className="text-center flex-1 pt-10">{quantity}</p>
                <button className="font-bold bg-gray-300 border-blue-400 rounded-md flex-1 border-2 text-red-400 ml-60 mr-5 py-3 px-15" onClick={decrement} disabled={!isDecEnabled}>Decrease</button>
                <button className="font-bold bg-gray-300 border-blue-400 rounded-md flex-1 border-2 text-green-400 mr-60 ml-5 py-3 px-15"onClick={increment} disabled={!isIncEnabled}>Increase</button>
                <label for="category-select"></label>
                <select category="" onChange={handleSelect}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">+</button>
            </form>
        </div>
    )
}