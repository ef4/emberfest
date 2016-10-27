import Ember from 'ember';
import slides from '../models/slides';
import $ from 'jquery';

export default Ember.Controller.extend({
  slides,
  jumpSlides(n) {
    let currentRoute = this.get('currentRouteName').split('.')[0];
    let currentIndex = slides.indexOf(slides.find(s => s.get('route') === currentRoute));
    let nextSlide = slides[currentIndex + n];
    if (nextSlide){
      this.transitionToRoute(nextSlide.get('route'));
    }
  },
  init() {
    this._super();
    $('body').on('keydown', e => {
      switch (e.keyCode) {
      case 37: //  left
        this.jumpSlides(-1);
        break;
      case 39: // right
        this.jumpSlides(1);
      }
    });
  }
});
