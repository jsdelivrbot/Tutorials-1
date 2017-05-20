//State argument is not application state, only the state
//this reducer is responsible for

//initialize the state variable to null so redux won't complain about it being initially undefined.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
