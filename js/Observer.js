export default class EventSourceObserver {
    constructor(dropDownSources) {
        this.observers = [];
        dropDownSources.addEventListener("click", e => {
            this.broadcast(e);
        })  
    }

    subscribe (fn) {
        this.observers.push(fn)
    }
    
    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
    
  };
  
  