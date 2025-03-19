"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas.js";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    
    const handleAddItem = (newItem) =>
    {
        console.log('Before add:', items);
        setItems((prevItems) => [...prevItems, newItem]);
        console.log('After add: ', items);
    };

    const handleItemSelect = (itemName) => {
        console.log('Before add:', items);
        const cleanedName = itemName.name.split(',');
        let trimmedName = cleanedName[0];
        trimmedName = trimmedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,'').replace(/\s+/g,' ').trim();
        setSelectedItemName(trimmedName);
        console.log('After add: ', items);
        
    }

return(
        <main className="bg-gray-400">
            <h1 className="border-4 border-blue-800 px-10 py-10 text-xl font-bold text-center text-white-300 bg-slate-800">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex">
                <div className="flex-1 m-5 border-2 ">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 border-2 my-5">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}