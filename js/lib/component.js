import Store from '../store/store.js';

export default class Component {
  constructor(props = {}) {
    let self = this;
    // Setting render to a preexisting method or if none exists an empty function 
    this.render = this.render || function() {};
    // Making sure we have an instance of store class, to call render at any state change 
    if(props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }
    
    if(props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
}