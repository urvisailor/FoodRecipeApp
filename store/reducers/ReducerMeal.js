import { Meals } from '../../data/Categorydata'
import { Toggle_FavMeal, SET_Filters } from '../actions/ActionMeal';
const InitialState = {
    meals: Meals,
    filteredmeals: Meals,
    FavoriteMeals: []
}

const ReducerMeal = (state = InitialState, action) => {
    switch (action.type) {
        case Toggle_FavMeal:
            const existingFavMeal = state.FavoriteMeals.findIndex(meal => meal.id === action.mealID);
            if (existingFavMeal >= 0) {
                const updatemeals = [...state.FavoriteMeals];
                updatemeals.splice(existingFavMeal, 1);
                return { ...state, FavoriteMeals: updatemeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealID);
                return { ...state, FavoriteMeals: state.FavoriteMeals.concat(meal) }
            }
        case SET_Filters:            
            const appliedfilters=action.filters;
            const filtersMeals=state.meals.filter(meal=>{
                if(appliedfilters.gluten && !meal.isGlutenFree)
                {
                    return false;
                }
                if(appliedfilters.Vegan  && !meal.isVegan){
                    return false;
                }
                return true;
            });
            const updatemeals={...state,filteredmeals:filtersMeals}
            return updatemeals;
        //const updatemeals={...state.FavoriteMeals} 
        default:
            return state

    }
    return state
}
export default ReducerMeal;