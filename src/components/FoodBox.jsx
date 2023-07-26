
const FoodBox = ({food, onDelete}) => {
  const {id, name, calories, image, servings} = food;
  const totalCalories = calories * servings;

  const deleteFood = () => {
    onDelete(id)
  };

    return (
        <div>
          <p>{name}</p>
            <img src={image} alt= {name} style={{height: "250px"}}/>
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {totalCalories} kcal </b> 
          </p>
          <button onClick={deleteFood}>Delete</button>
        </div>
    )
}

export default FoodBox;