export default class CreateStore{
    constructor(reducer, initialState){
        this.currentReducer = reducer;
        this.currentState = initialState;
        this.listeners = [];
    }
  
    dispatch(action) {
        currentState = currentReducer(currentState, action);
        listeners.forEach(listener => listener());
        return action;
      }
    
    subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }

    getState() {
        return currentState;
    }

}