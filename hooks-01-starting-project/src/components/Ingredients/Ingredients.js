import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingerdientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there');
  }
};



const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingerdientReducer, []);
  const {isLoading, error, data, sendRequest, reqExtra} = useHttp();
  
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
    dispatch({type: 'DELETE', })
  }, [data]);

  const filteredIngredientsHandloer = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});
    // fetch('https://react-curso-hooks.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { 'Content-Type': 'application/json' }
    // }).then(response => {
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //   return response.json();
    // }).then(responseData => {
    //   // setUserIngredients(prevIngredients => [
    //   //   ...prevIngredients,
    //   //   { id: responseData.name, ...ingredient }
    //   // ]);
    //   dispatch({type: 'ADD', ingredient: { id: responseData.name, ...ingredient }})
    // });
  }, []);

  const removeIngredientHandler = useCallback(ingredientId => {
    // setIsLoading(true);
    sendRequest(
      `https://react-curso-hooks.firebaseio.com/ingredients/${ingredientId}.json`, 
      'DELETE',
      null,
      ingredientId
    );
    // dispatchHttp({type: 'SEND'});
    // fetch(`https://react-curso-hooks.firebaseio.com/ingredients/${ingredientId}.json`, {
    //   method: 'DELETE'
    // }).then(response => {
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //   // setUserIngredients(prevIngredients =>
    //   //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    //   // );
    //   dispatch({type: 'DELETE', id: ingredientId});
    // }).catch(error => {
    //   // setError('Something went wrong');
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong'});
    // });
  }, [sendRequest]);

  const clearError = useCallback(() => {
    // setError(null);
    // dispatchHttp({type: 'CLEAR'});
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler} />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandloer} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
