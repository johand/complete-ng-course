import { trigger, transition, style, animate, state, keyframes, useAnimation,
  query, animateChild, group, stagger
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden'
      })),

      // state('expanded', style({
      //   height: '*',
      //   padding: '*',
      //   overflow: 'auto'
      // })),

      transition('collapsed => expanded', [
        animate('300ms ease-out')
      ]),

      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
