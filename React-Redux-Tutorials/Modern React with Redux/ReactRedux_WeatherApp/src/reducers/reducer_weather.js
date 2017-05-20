import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //We don't ever want to mutate out state, so we always return a new state
      //never do state.push(...)
      //concat, it retuns a new state with the existing state.
      //return state.concat([action.payload.data]); <-- can be done like this but with ES6
      return [action.payload.data, ...state]; //put all the elements from state into this new array i.e [city, city, city]

  }
  return state;
}
