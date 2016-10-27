import Ember from 'ember';

// BEGIN-SNIPPET awkward-list
function rules() {
  this.transition(
    this.use('explode', {
      matchBy: 'data-id',
      use: ['fly-to', { duration: 1000 }]
    }, {
      use: ['swap-out', 'x', -1, { duration : 1000 }]
    })
  );
}
// END-SNIPPET

export default Ember.Controller.extend({
  numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  rules,
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
