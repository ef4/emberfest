import Ember from 'ember';

export default Ember.Controller.extend({
  numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  actions: {
    insert() {
      let n = parseInt(this.get('nextNumber'));
      this.set('numbers', this.get("numbers").concat(n).sort((a,b) => a-b));
      this.set('nextNumber', '');
    },
    remove(number) {
      this.set('numbers', this.get("numbers").filter(n => n !== number));
    }
  }
});
