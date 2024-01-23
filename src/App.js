import {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const MY_ID = '99c472aa';
  const MY_KEY = '3178d393ba6f832673117b8d79bf50d5';

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const[mySubmitted, setMySubmitted] = useState('avocado');

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${mySubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [mySubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setMySubmitted(mySearch);
  } 


  return (
  <div className="App">
    <section className="section_menu">
      <div className="section_title">
        <h1><span>Discover real flavor treasures within this app</span> Taste Trove</h1>
        <form className="search" onSubmit={finalSearch}>
          <input placeholder="Enter the ingredient..." type="text" onChange={myRecipeSearch} value={mySearch}/>
          <button onClick={finalSearch} type="submit">Find</button>
        </form>
      </div>
    </section>


   <div className='recipes-container'>
      {myRecipes.map((element, index) => (
        <div key={index} className="recipe">
          <Recipe
            image={element.recipe.image}
            label={element.recipe.label}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
          />
        </div>
      ))}
  </div>
  </div>
  );
}

export default App;
