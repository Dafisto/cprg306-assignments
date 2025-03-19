"use client"

import Item from "./item.js";
import React, { useState } from "react";

export default function ItemList({ items, onItemSelect }) {

    const [sortBy, setSortBy] = useState("name")

    const sortByElementName = () =>
    {
        setSortBy("name");
    }

    const sortByElementCategory = () =>
    {
        setSortBy("category")
    }

    const displayByElement = [...items].sort((a,b) =>
    {
        if (sortBy === "name")
        {
            if (a.name < b.name)
                return -1;
            else if(a.name > b.name)
                return 1;
            else
                return 0;
        }
        else if (sortBy === "category")
        {
            if (a.category < b.category)
                return -1;
            else if(a.category > b.category)
                return 1;
            else
                return 0;
        }
    });

    return (
    <div className="mx-10 flex flex-col border-4 border-blue-800 bg-gray-600 rounded-md mb-10 w-[450px]">
        <div className="flex bg-slate-800 py-5">
            <label className="flex-0 pl-5" htmlFor="sort">Sort by:</label>
            <div className="flex flex-1">
                <button className="flex-1 w-[60px] bg-orange-400 font-bold ml-5 mr-2" onClick={sortByElementName}>Name</button>
                <button className="flex-1 w-[60px] bg-orange-400 mr-5 font-bold ml-2" onClick={sortByElementCategory}>Category</button>
            </div>
        </div>
        <ul className="flex flex-wrap">
            {displayByElement.map((item) => (
                    <Item 
                    key={`display-item-${item.id}`}
                    {...item}
                    onSelect={onItemSelect}
                />
            ))}
        </ul>
    </div>
    );
}
