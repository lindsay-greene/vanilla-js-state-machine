import PubSub from '../lib/pubsub.js';

export default class Store {
    constructor(params) {
      let self = this;
      // Default objects 
      self.actions = {};
      self.mutations = {};
      self.state = {};
      self.status = 'resting';
      // New pubsub that is attached to store as an events element
      self.events = new PubSub();
      // Check if actions were passed in   
      if(params.hasOwnProperty('actions')) {
        self.actions = params.actions;
      }
      // Check if mutations were passed in 
      if(params.hasOwnProperty('mutations')) {
        self.mutations = params.mutations;
      }
      // Monitor when object is asked for data or when changes are made to it 
      self.state = new Proxy((params.state || {}), {
        // Trapping a state change 
        set: function(state, key, value) {
          state[key] = value;
          
          // Recording and publishing the state change   
          console.log(`stateChange: ${key}: ${value}`);
          self.events.publish('stateChange', self.state);
      
          // Providing a warning if state is being changed illegally (not thru a mutation)
          if(self.status !== 'mutation') {
            console.warn(`You should use a mutation to set ${key}`);
          }
      
          self.status = 'resting';
      
          return true;
        }
      });
    }
  }