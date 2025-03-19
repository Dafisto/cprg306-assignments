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

    const handleSubmit =(event) =>{
        event.preventDefault();
        const randomIDGenerator = (length) => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            const charsLength = chars.length;
            for(let i = 0; i < length; i++){
                result +=chars.charAt(Math.floor(Math.random()* charsLength));
            }
            return result;
        }
        const item ={
            id: randomIDGenerator(16),
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
        <div className="flex ml-10">
            <form className="bg-slate-800 w-[400px] border-4 border-blue-800 rounded-md bg-gray-800 mb-8 p-4" onSubmit={handleSubmit}>
                <div>
                    <div className="flex border-2 rounded-md border-white mb-3">
                        <label htmlFor="name"></label>
                        <input className="text-black flex-1 py-2" type="text" placeholder="Enter Item" value={name} onChange={handleChange} required/>
                    </div>
                    <div className="flex flex-row">
                        <section className="mr-3 text-black bg-white flex flex-1 mr-2 justify-between border-2 rounded-md border-white py-2">
                            <p className="flex-1 pl-2">{quantity}</p>
                            <button className="w-[35px] h-[25px] mx-1 px-1 font-bold text-lg bg-blue-800 rounded-md text-red-400" onClick={decrement} disabled={!isDecEnabled}>-</button>
                            <button className="w-[35px] h-[25px] mx-1 px-1 font-bold bg-blue-800 border-blue-400 rounded-md text-white"onClick={increment} disabled={!isIncEnabled}>+</button>
                        </section>
                        <section className="flex flex-1 ml-3">
                            <label htmlFor="category-select"></label>
                            <select className="flex-1 rounded-md text-black py-2 pl-2 " category="" onChange={handleSelect}>
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
                    <div className="flex flex-1">
                        <button className="font-bold text-green-400 text-lg border-blue-800 bg-blue-800 h-[44px] w-[460px] border-4 mt-5 py-2 rounded-md " type="submit">+</button>
                    </div>
                </div>
            </form>
        </div>
    )
}