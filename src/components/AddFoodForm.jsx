import { useState } from 'react'

const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(formData);
    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
export default AddFoodForm
