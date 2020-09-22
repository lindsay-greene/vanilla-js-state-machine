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

      // Dispatch method for actions 
      dispatch(actionKey, payload) {

        let self = this;
      
        // If no action exists then log an error 
        if(typeof self.actions[actionKey] !== 'function') {
          console.error(`Action "${actionKey} doesn't exist.`);
          return false;
        }
      
        // If action exists: 
        // create a logging group for the action 
        console.groupCollapsed(`ACTION: ${actionKey}`);
        // set status
        self.status = 'action';
        // call action 
        self.actions[actionKey](self, payload);
      
        console.groupEnd();
      
        return true;
      }  

      // Commit method for mutations 
      commit(mutationKey, payload) {
        let self = this;
      
        // If mutation doesn't exist then log an error 
        if(typeof self.mutations[mutationKey] !== 'function') {
          console.log(`Mutation "${mutationKey}" doesn't exist`);
          return false;
        }

        //If mutation exists: 
        // set status 
        self.status = 'mutation';
        // set new state based on what mutation was run  
        let newState = self.mutations[mutationKey](self.state, payload);
        // Merge new state with old state to create updated state 
        self.state = Object.assign(self.state, newState);
      
        return true;
      }
}

  