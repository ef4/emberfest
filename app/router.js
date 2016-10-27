import Ember from 'ember';
import config from './config/environment';
import slides from './models/slides';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  slides.forEach(slide => {
    if (slide.get('autoRoute') !== false) {
      this.route(slide.get('route'));
    }
  });
});

export default Router;
