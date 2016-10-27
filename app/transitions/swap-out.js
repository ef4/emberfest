import {
  animate,
  Promise
} from "liquid-fire";

import {
  waitForPrevious,
  propertiesFor,
  marginAdjustment,
  biggestSize
} from './transition-helpers';

export default function swapOut(dimension, direction, opts) {
  let { property, measure } = propertiesFor(dimension);

  return waitForPrevious(this, 'moving-in').then(() => {
    let bigger = biggestSize(this, measure);
    let animateMargin = marginAdjustment(this, measure, opts);
    let halfDuration = { duration: opts.duration / 2 };
    return Promise.all([
      animateMargin(),
      animate(this.oldElement, {
        [property]: (-1 * bigger * direction) + 'px'
      }, halfDuration).then(
        () => animate(this.newElement, {
          [property]: ["0px", (-1 * bigger * direction) + 'px']
        }, halfDuration, 'moving-in')
      )
    ]);
  });
}
