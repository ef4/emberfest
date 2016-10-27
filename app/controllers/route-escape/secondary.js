import Ember from 'ember';

export default Ember.Controller.extend({
  items: Ember.computed({
    get() {
      let result = [];
      for (let i = 0; i < 7; i++) {
        result.push(makeRandomItem());
      }
      result.push({ id: 1});
      result.push({ id: 400});
      result.push({ id: 800});
      return result.sort(numeric);
    },
    set(k,v) {
      return v;
    }
  }),

});

function numeric(a,b) { return a.id - b.id; }

function makeRandomItem() {
  return { id: Math.round(Math.random()*1000) };
}
