export default function() {

  // BEGIN-SNIPPET easy-start
  this.transition(
    this.fromRoute('easy-start.index'),
    this.toRoute('easy-start.detail'),
    this.use('to-left'),
    this.reverse('to-right')
  );
  // END-SNIPPET
}
