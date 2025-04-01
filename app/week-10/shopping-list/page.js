"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import React, { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas.js";
import { addItem, getItems } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context.js";


export default function Page(){
    const { user } = useUserAuth(); 

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        if(user) {
            try {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            } catch (error) {
                console.error('Error retrieving list: ', error);
            }
        }
    }
    
    const handleAddItem = async (newItem) =>
    {
        if(user) {
            try {
                const newItemID = await addItem(user.uid, newItem);
                setItems((prevItems) => [...prevItems, {...newItem, id: newItemID}]);
            } catch (error) {
                console.error('Error on add: ', error);
            }
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.name.split(',');
        let trimmedName = cleanedName[0];
        trimmedName = trimmedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,'').replace(/\s+/g,' ').trim();
        setSelectedItemName(trimmedName);
    }

    useEffect(() => {
        loadItems();
    }, [user]);

    return(
        <main className="bg-black">
            <h1 className="mx-10 px-3 py-10 text-4xl font-bold text-white-300 ">Shopping List</h1>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <NewItem onAddItem={handleAddItem} userID={user?.uid} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex ">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}