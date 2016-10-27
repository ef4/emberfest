// liquid-fire/transitions/fade
import FadeIn from 'liquid-fire/motions/fade-in';
import FadeAway from 'liquid-fire/motions/fade-away';
import { task } from 'ember-concurrency';
import Transition from 'liquid-fir/transition';

export default Transition.extend({
  starting: task(function * (initial, final) {
    yield new FadeAway(initial).run();
    yield new FadeIn(final).run();
  })
});
