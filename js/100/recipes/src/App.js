import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';

function App(props) {
  /*const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'hot dog',
      ingredients: ['hot dog', 'bun', 'ketchup', 'mustard'],
      directions: ['grill hot dog', 'put in bun', 'add desired condiments'],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png'
    },
    {
      id: 2,
      name: 'burger',
      ingredients: ['burger', 'bun', 'ketchup', 'mustard'],
      directions: ['grill burger', 'put in bun', 'add desired condiments'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu7ApJIGtV5ad62F-caryj0pJcv-ZimqAHw&usqp=CAU'
    }
  ]);

  const [selectedRecipe, setSelectedRecipe] = useState(0);*/

  const [state, setState] = useState({
    recipes: [
      {
        id: 1,
        name: 'hot dog',
        ingredients: ['hot dog', 'bun', 'ketchup', 'mustard'],
        directions: ['grill hot dog', 'put in bun', 'add desired condiments'],
        picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png'
      },
      {
        id: 2,
        name: 'burger',
        ingredients: ['burger', 'bun', 'ketchup', 'mustard'],
        directions: ['grill burger', 'put in bun', 'add desired condiments'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu7ApJIGtV5ad62F-caryj0pJcv-ZimqAHw&usqp=CAU'
      }
    ],
    selectedRecipe: 0
  })

  return (
    <div className="container text-center">
      <h1>PCS Recipes</h1>
      <RecipeList recipes={state.recipes} selectRecipe={i => setState({ ...state, selectedRecipe: i })} />
      <hr />
      <RecipeDetails recipe={state.recipes[state.selectedRecipe]} />
      <Counter />
    </div>);
}

export default App;
