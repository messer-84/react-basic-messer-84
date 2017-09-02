import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggle } from '../actions/toggleActiveActions';

class Recipes extends Component {
  // const {  }
  showRecipes(arr) {
    return arr.map(recipe =>
      <li
        key={recipe.id}
        onClick={() => {
          console.log('comp');
          toggle();
        }}
      >
        <div>
          {recipe.name}
        </div>
        <ul>
          {recipe.ingredients.map((ing, index) =>
            <li key={index}>
              {ing.name} - {ing.quanity}
            </li>,
          )}
        </ul>
      </li>,
    );
  }
  showActiveRecipe(arr, recipeId) {
    return arr.map(recipe => {
      if (recipe.id === recipeId) {
        return (
          <div key={recipe.id}>
            <div>
              {recipe.name}
            </div>
            <ul>
              {recipe.ingredients.map((ing, index) =>
                <li key={index}>
                  {ing.name} - {ing.quanity}
                </li>,
              )}
            </ul>
          </div>
        );
      }
    });
  }

  render() {
    console.log(this.props);
    const { recipeIndex, toggle } = this.props;

    // const allRecipes = this.showRecipes(recipesArr);
    // const activeRecipe = this.showActiveRecipe(recipesArr, recipeIndex);

    return (
      <div>
        <div className="activeRecipe">
          {activeRecipe}
        </div>
        <div className="allRecipes">
          <ul className="recipes">
            {allRecipes}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipeIndex: state.toggleActiveReducer.recipeIndex,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle() {
      dispatch(toggle());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
