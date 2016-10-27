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
  "Decomposition2",
  "Tagless Alone",
  "Deep Outlet",
  "Deep Outlet2",
  "Lists",
  "Lists2",
  "Two Lists",
  { title: "Route Escape", autoRoute: false },
  "Far Matching",
  "Transition Primitive",
  "Motion Primitive",
  "Transition Primitive2",
  "Interruptions",
  "Better Primitives",
  "Shipping"
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
