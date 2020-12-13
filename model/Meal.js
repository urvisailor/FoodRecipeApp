class Meal{
    constructor(id,categoryIDs,title,affordable,complexity,imageUrl,duration,ingredients,steps,isVegan,isGlutenFree){
            this.id=id;
            this.categoryIDs=categoryIDs;
            this.title=title;
            this.affordable=affordable;
            this.complexity=complexity;
            this.imageUrl=imageUrl;
            this.duration=duration;
            this.ingredients=ingredients;
            this.steps=steps;
            this.isVegan=isVegan;
            this.isGlutenFree=isGlutenFree;
    }
}
export default Meal;