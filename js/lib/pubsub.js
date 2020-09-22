export default class PubSub {
    constructor() {
      // holds named events   
      this.events = {};
    }
    // Subscribe method
    subscribe(event, callback) {

        let self = this;
      
        // if no matching event in events, create one with a blank array 
        if(!self.events.hasOwnProperty(event)) {
          self.events[event] = [];
        }
        
        // push the callback into the events collection 
        return self.events[event].push(callback);
      }
      // Publish method 
      publish(event, data = {}) {

        let self = this;
        
        // see if event exists in collection 
        if(!self.events.hasOwnProperty(event)) {
          return [];
        }
        
        // loop through each stored callback and pass the data into it 
        return self.events[event].map(callback => callback(data));
      }
      
  }

  