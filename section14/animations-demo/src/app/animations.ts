import { trigger, transition, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // bidirectional state change expressions
    // transition('void <=> *', [
    transition(':enter, :leave', [
        animate(2000)
    ])
])
