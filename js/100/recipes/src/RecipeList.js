import React from 'react'
import PropTypes from 'prop-types'

export default function RecipeList(props) {
  const { recipes, selectRecipe } = props;

  return (
    <div>
      <ul className="bulletless">
        {recipes.map((r, i) => <li key={r.id} onClick={() => selectRecipe(i)}>{r.name}</li>)}
      </ul>
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  selectRecipe: PropTypes.func.isRequired
}