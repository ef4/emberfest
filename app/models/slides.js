import Ember from 'ember';

const slides = [
  "Title Slide",
  "Not This Kind",
  "Physical Metaphors"

];

const Slide = Ember.Object.extend({
  route: Ember.computed('title', {
    get() {
      return this.get('title').dasherize();
    },
    set(k,v) {
      return v;
    }
  })
});

export default slides.map(s => {
  if (typeof(s) === 'string') {
    return Slide.create({title: s });
  } else {
    return Slide.create(s);
  }
});
