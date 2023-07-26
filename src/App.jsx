import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

const deleteFood = (foodId) => {
  const updatedFoods = foods.filter((food) => food.id !== foodId);
  setFoods(updatedFoods);
}

const addFood = (newFood) => {
  setFoods([...foods, newFood]);
}


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/* <AddFoodForm addFood={addFood} />  */}
      
      <div className="food-list">  
        {foods.map((oneFood) => {
         return (
           <>
             <FoodBox 
             key={oneFood.id}
             food={oneFood} 
             onDelete={deleteFood}
             />
        
           </>
         )
        })}
      </div>
    </div>
  );
}

export default App;
