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
    <div>
        <h2>Meal Ideas</h2>
        <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>
                    <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    />
                    <p>{meal.strMeal}</p>
                </li>
            ))}
        </ul>
    </div>
    );
}



