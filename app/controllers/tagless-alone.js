import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleActivated() {
      this.set('activated', !this.get('activated'));
    }
  }
});
