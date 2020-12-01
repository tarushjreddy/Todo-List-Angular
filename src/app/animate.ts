import {
  trigger,
  transition,
  style,
  state,
  animate,
} from '@angular/animations';

export let roll = trigger('fade', [
  state(
    'void',
    style({
      backgroundColor: '#dfe4ea',
      opacity: 0.1,
    })
  ),
  transition(':enter, :leave', [animate(500)]),
]);

export let card = trigger('fade', [
  state(
    'void',
    style({
      backgroundColor: '#dfe4ea',
      opacity: 0.01,
    })
  ),
  transition(':enter, :leave', [animate(500)]),
]);
