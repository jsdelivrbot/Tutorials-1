export default function({ dispatch }) {
  return next => action => {

    //If action does not have payload
    //or, payload does not have a .then property (meaning its not a promise),
    //We don't care about it send it on.
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    //Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        //create a new action with the old type, but
        //replace the promise from our payload with the response data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  }
}
