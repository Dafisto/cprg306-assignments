"use client"
import React, { useState, useEffect } from "react";

async function fetchMealIdeas (ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data= await response.json();
        return data.meals || [];
    } catch(error) {
        console.error(error);
        return[];
    }
}

export default function MealIdeas( {ingredient} ) {
    
    const [meals, setMeals] = useState([]);
    

    useEffect (() => {
        const loadMealIdeas = async () =>{
            if(ingredient) {
                const mealData = await fetchMealIdeas(ingredient);
                setMeals(mealData);
            }
            else
            {
                setMeals([]);
            }
        }
        loadMealIdeas();
    },[ingredient]);
    
    return(
    <div className="flex flex-col border-4 border-blue-800 bg-gray-600 rounded-md mb-10 w-[500px]">
        <div>
            <h2 className="px-10 py-10 text-3xl font-bold text-white-300 bg-slate-800">Meal Ideas:</h2>
        </div>
        <div>
            <ul className="flex flex-wrap">
                {meals.map((meal) => (
                    <li className="p-5 flex-1" key={`display-meal${meal.idMeal}`}>
                        <img className="h-[125px] w-[125px] rounded-md"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        />
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}



