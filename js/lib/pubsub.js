
export default class PubSub {
  constructor() {
      this.events = {};

  }

    }

    // Subscribe method
    subscribe(event, callback) {


  /**
   * Either create a new event instance for passed `event` name
   * or push a new callback into the existing collection
   *
   * @param {string} event
   * @param {function} callback
   * @returns {number} A count of callbacks for this event
   * @memberof PubSub
   */
  subscribe(event, callback) {
      
      let self = this;
      
      // If there's not already an event with this name set in our collection
      // go ahead and create a new one and set it with an empty array, so we don't
      // have to type check it later down-the-line
      if(!self.events.hasOwnProperty(event)) {
          self.events[event] = [];
      }

      
      // We know we've got an array for this event, so push our callback in there with no fuss
      return self.events[event].push(callback);
  }


      // Publish method 
      publish(event, data = {}) {


  /**
   * If the passed event has callbacks attached to it, loop through each one
   * and call it
   *
   * @param {string} event
   * @param {object} [data={}]
   * @returns {array} The callbacks for this event, or an empty array if no event exits
   * @memberof PubSub
   */
  publish(event, data = {}) {
      let self = this;
      
      // There's no event to publish to, so bail out
      if(!self.events.hasOwnProperty(event)) {
          return [];
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
      

      // Get each subscription and call its callback with the passed data
      return self.events[event].map(callback => callback(data));
  }
}

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

  

