/**
 * Reducers must return any type of value
 * beside undefined, even null is fine.
 * 
 * Reducers produce a state to be used inside the
 * app using only the previous state and the
 * action. The very first call the state is undefined hence
 * it's important to set an initial state value when undefined
 * 
 * Reducers should be pure e.g: They should produce the new state
 * without making API calls, opening system files, query DOM
 * objects, asking for user's input, etc. It should only return some 
 * computation based on the state and the action received
 * 
 * Reducers must not mutate its input state argument. This applies to 
 * arrays and object since integers and strings are inmutable.
 * Avoid array mutation like state.pop(), state.push(), state[0] = value
 * Avoid obj mutation like state.name = value, or state obj.name
 */

 export default (state = [], action) => {
   switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      default:
        return state;
   }
 };