import React from 'react';
import RecipeCard from '../recipecard';
import './recipecontainer.css'

function RecipeContainer({recipes}) {
    if(!recipes){
        return(<diV className="no-result"><h1> No result found </h1></diV>)
    }
    return (
        <div className='recipe-container'>
         {recipes.map((r)=>(
             <div key={r.idMeal}> <RecipeCard  {...r} /></div>
            
         ))}   
        </div>
    )
}

export default RecipeContainer
