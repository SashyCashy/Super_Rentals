import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //console.log('Length',this.store.findAll('rental').get('length'));
    return this.store.findAll('rental');
  },
});
