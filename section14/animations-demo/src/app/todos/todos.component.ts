import { trigger, transition, style, animate, state, keyframes, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation, fadeOutAnimation } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })
      ]),

      transition(':leave', [
        style({ backgroundColor: 'red' }),
        // animate(1000),
        useAnimation(fadeOutAnimation, {
          params: {
            duration: '1000ms',
          }
        }),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
