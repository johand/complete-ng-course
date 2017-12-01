import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1
  }

}
