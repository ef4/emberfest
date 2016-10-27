// liquid-fire/motions/fade-away
import Motion from 'liquid-fire/motion';
import { task } from 'ember-concurrency';
import { velocity }  from 'liquid-fire/concurrency-helpers';
import $ from 'jquery';

export default Motion.extend({
  starting: task(function * () {
    let startOpacity = parseFloat($(this.element).css('opacity'));
    let duration = this.opts.duration * startOpacity;
    yield velocity(this.element, { opacity: 0 }, { duration });
  })
});
