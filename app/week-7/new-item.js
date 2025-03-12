"use client"

import { useState } from 'react';

export default function NewItem( {onAddItem} ){
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

    const increment=(event)=>{
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
        event.preventDefault();
    };

    const decrement=(event)=>{
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
        event.preventDefault();
    };

    const handleChange =(event) => {
        setName(event.target.value);
    };

    const handleSelect =(event) => {
        setCategory(event.target.value);
    };

    const randomIDGenerator = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result ='';
            const charsLength = chars.length;
            for(let i = 0; i < 18; i++){
                result +=chars.charAt(Math.floor(Math.random()* charsLength));
            }

            return result;

    };

    const handleSubmit =(event) =>{
        event.preventDefault();
        const item ={
            id: randomIDGenerator(),
            name: name,
            quantity: quantity,
            category: category,
        };        
        console.log(item);
        onAddItem(item);
        setName(""), setQuantity(1);
        event.target.reset();
    };

    
    
    return(
        <main className="flex justify-center w-full">
        <form className="border-2 rounded-md bg-gray-800 m-4 p-4 justify-center" onSubmit={handleSubmit}>
            <div className="">
                <div className="border-2 rounded-md border-white mb-3">
                    <label htmlFor="name"></label>
                    <input className="text-black" type="text" placeholder="Enter Item" value={name} onChange={handleChange} required/>
                </div>

                <div className="flex flex-row">
                    <section className="text-black bg-white flex flex-1 mr-2 justify-between border-2 rounded-md border-white mb-2 py-1">
                        <p className="flex-1">{quantity}</p>
                        <button className="mr-1 px-1 font-bold bg-gray-300 border-blue-400 rounded-md text-red-400" onClick={decrement} disabled={!isDecEnabled}>-</button>
                        <button className="mr-1 px-1 font-bold bg-gray-300 border-blue-400 rounded-md text-green-400"onClick={increment} disabled={!isIncEnabled}>+</button>
                    </section>
                    <section className="flex-1">
                        <label htmlFor="category-select"></label>
                            <select className="rounded-md py-2 text-green-400" category="" onChange={handleSelect}>
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
                    </section>
                </div>
                <button type="submit">+</button>
            </div>
        </form>
        </main>
    )
}