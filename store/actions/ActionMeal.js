export const Toggle_FavMeal='Toggle_Meal';
export const SET_Filters='Set_filters';
export const ToggleFavAction=(id)=>{
    return {type:Toggle_FavMeal,mealID:id};
}
export const SetFilterAction=filtersettings=>{
    return {type:SET_Filters,filters:filtersettings};
}
