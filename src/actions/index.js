import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/**
 * Since redux-thunk is applied as middleware, is possible to
 * return a function rather than a plain JS object from an action
 * creator. 
 * It's also possible to call dispatch manually within the action
 */

  export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //Await ensure the execution low doesn't progress to the next
    //line until the fetch post returns a value 
    await dispatch(fetchPosts());

    //Use lodash to map through
    //the posts in getState and return an array of userId's that
    //is then filter by unique ids using lodash uniq function 
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    userIds.forEach(id => dispatch(fetchUser(id)));
  }

 /**
  * Equivalent to refactor with ES2015 syntax as
  * export function fetchPosts() => async dispatch => {
  * }
  */
export function fetchPosts() {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  }; 
};

export const fetchUser = id => async dispatch => {
  const response  = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

/**
 *Lodash approach 
 *Use Lodash memoize function to call the fetchUser once per use id.  *
 *  If the user id changes it will make another api call but it won't
 *  if the id provided was used on a previous call
 */

//export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

//Create the memoized function that will be called by the action creator 

/*
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data})
})
*/



 
