import Ember from 'ember';
import slides from "../models/slides";

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo(slides[0].get('route'));
  }
});
