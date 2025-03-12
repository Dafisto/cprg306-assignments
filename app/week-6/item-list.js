"use client"

import { useState } from 'react';
import Item from "./item.js";
import items from "./items.json";

export default function ItemList(){    

    const [sortBy, setSortBy] = useState("name")

    const sortByElementName = () =>
    {
        setSortBy("name");
    }

    const sortByElementCategory = () =>
    {
        setSortBy("category")   
        debugger     
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
        else (sortBy === "category")
        {
            if (a.category < b.category)
                return -1;
            else if(a.category > b.category)
                return 1;
            else
                return 0;
        }
    })

    return (
        <main>
            <label htmlFor="sort">Sort by:</label>
            <button onClick={() => sortByElementName()}>Name</button>
            <button onClick={() => sortByElementCategory()}>Category</button>
            <button>Grouped Category</button>
    <div className="">        
        {displayByElement.map((item) => (
            <Item key={item.id}{...item}/>
        ))}        
    </div>
    </main>
    );
}
