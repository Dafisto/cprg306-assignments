"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React, { useState } from "react";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    
    const handleAddItem = (newItem) =>
    {
        console.log('Before add:', items);
        setItems((prevItems) => [...prevItems, newItem]);
        console.log('After add: ', items);
    };

return(
        <main className="bg-gray-400">
            <h1 className="border-4 border-blue-800 px-10 mx-2 py-10 my-4 text-xl font-bold text-center text-white-300 bg-slate-800">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}