import { Component, Input,  OnInit } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

 /* @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };*/

 @Input() post: Post;

  constructor() {
    // this.post.created_at = new Date();
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts ++;
  }

  onDontLoveIt() {
    this.post.loveIts --;
  }

}
