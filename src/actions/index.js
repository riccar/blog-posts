import jsonPlaceholder from '../apis/jsonPlaceholder';

/**
 * Since redux-thunk is applied as middleware, is possible to
 * return a function rather than a plain JS object from an action
 * creator. 
 * It's also possible to call dispatch manually within the action
 */

 /***
  * Equivalent to refactor with ES2015 syntax as
  * export function fetchPosts() => async dispatch => {
  * }
  */
export function fetchPosts() {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response })
  }; 
};



 
