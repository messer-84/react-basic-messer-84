import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggle } from '../actions/toggleActiveActions';

const recipesArr = [
  {
    id: 0,
    isActive: true,
    name: 'Recipe-1',
    ingredients: [
      {
        name: 'ing-1',
        quanity: '100g',
      },
      {
        name: 'ing-2',
        quanity: '200g',
      },
      {
        name: 'ing-3',
        quanity: '300g',
      },
    ],
  },
  {
    id: 1,
    isActive: false,
    name: 'Recipe-2',
    ingredients: [
      {
        name: 'ing-1',
        quanity: '150g',
      },
      {
        name: 'ing-2',
        quanity: '250g',
      },
      {
        name: 'ing-3',
        quanity: '350g',
      },
    ],
  },
  {
    id: 2,
    isActive: false,

    name: 'Recipe-3',
    ingredients: [
      {
        name: 'ing-1',
        quanity: '100g',
      },
      {
        name: 'ing-2',
        quanity: '200g',
      },
      {
        name: 'ing-3',
        quanity: '300g',
      },
    ],
  },
  {
    id: 3,
    isActive: false,
    name: 'Recipe-4',
    ingredients: [
      {
        name: 'ing-1',
        quanity: '100g',
      },
      {
        name: 'ing-2',
        quanity: '200g',
      },
      {
        name: 'ing-3',
        quanity: '300g',
      },
    ],
  },
  {
    id: 4,
    isActive: false,
    name: 'Recipe-5',
    ingredients: [
      {
        name: 'ing-1',
        quanity: '100g',
      },
      {
        name: 'ing-2',
        quanity: '200g',
      },
      {
        name: 'ing-3',
        quanity: '300g',
      },
    ],
  },
];

class Recipes extends Component {
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

    const allRecipes = this.showRecipes(recipesArr);
    const activeRecipe = this.showActiveRecipe(recipesArr, recipeIndex);

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
