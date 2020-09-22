// Importing what we need from other documents 
import store from './store/index.js'; 
import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';
const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

// Make the form interactive 
formElement.addEventListener('submit', evt => {
    // prevent textbox from submitting until we check it 
    evt.preventDefault();
    // trim textbox entry to make sure there is actual content 
    let value = inputElement.value.trim();
    // if entry is not empty then dispatch it to store 
    if(value.length) {
      store.dispatch('addItem', value);
      inputElement.value = '';
      inputElement.focus();
    }
  });

// create and render new instances of each component 
const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

countInstance.render();
listInstance.render();
statusInstance.render();