import Ember from 'ember';
// BEGIN-SNIPPET local-rules
function myRules() {
  this.transition(
    this.fromValue(true),
    this.toValue(false),
    this.use('to-up'),
    this.reverse('to-down')
  );
}

export default Ember.Controller.extend({
  myRules,
  actions: {
    toggleActivated() {
      this.set('activated', !this.get('activated'));
    }
  }
});
// END-SNIPPET
