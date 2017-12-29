import { trigger, transition, style, animate, state } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-30px)' }),
        animate(500)
    ]),

    transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)' }))
    ])
])

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // bidirectional state change expressions
    // transition('void <=> *', [
    transition(':enter, :leave', [
        animate(2000)
    ])
])
