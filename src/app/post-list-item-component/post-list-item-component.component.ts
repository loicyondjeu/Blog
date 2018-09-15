import { Component, Input,  OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

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

  constructor(private postsService: PostsService) {
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

  onDeletePost() {
    this.postsService.removePost(this.post);
  }
}
