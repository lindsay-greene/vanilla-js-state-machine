// default actions for functionality from the get-go 
// pass payload to mutation which commits it to the store 
export default {
    addItem(context, payload) {
      context.commit('addItem', payload);
    },
    clearItem(context, payload) {
      context.commit('clearItem', payload);
    }
  };

  