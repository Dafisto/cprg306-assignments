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
    <main>
        <div className="flex flex-wrap border-4">
            <label className="flex-1 border-2" htmlFor="sort">Sort by:</label>
            <button className="flex-1" onClick={sortByElementName}>Name</button>
            <button className="flex-1" onClick={sortByElementCategory}>Category</button>
        </div>
        <ul className="flex">
            {displayByElement.map((item) => (
                    <Item 
                    key={`display-item-${item.id}`}
                    {...item}
                    onSelect={onItemSelect}
                />
            ))}
        </ul>
    </main>
    );
}
