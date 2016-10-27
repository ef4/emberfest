import Ember from 'ember';

const slides = [
  "Title Slide",
  "Liquid Fire Github",
  { title: "Easy Start", autoRoute: false },
  "Easy If",
  "Local Rules",
  "Dom Trouble",
  "Dom Trouble2",
  "Decomposition",
  "Decomposition2"
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
