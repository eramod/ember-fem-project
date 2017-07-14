import Ember from 'ember';

export default Ember.Route.extend({
  
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(org) {
      this.get('favorites').favoriteItem(org)
    }
  },

  model() {
    return [
      { id: 'emberjs' }, 
      { id: 'ember-cli' },
      { id: 'microsoft' },
      { id: 'yahoo' },
      { id: 'netflix' },
      { id: 'facebook' }
    ]
  }
});
