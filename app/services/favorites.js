import Ember from 'ember';

export default Ember.Service.extend({
  items: [], 

  favoriteItem(item) {
    this.get('items').addObject(item)
    console.log(
      this.get('items')
        .map( i => i.id )
        .join(', ')
    )
  }

});