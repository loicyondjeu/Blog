import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

export class PostsService {
  firstPost = new Post('Mon premier post', 'contenu', 2 );
  secondPost = new Post('Mon deuxieme post', 'contenu', -1 );
  anotherPost = new Post('encore un post', 'contenu', 0 );

  private posts = [this.firstPost, this.secondPost, this.anotherPost];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (postPointer) =>  {
        return postPointer === post;
     }
    );
    this.posts.splice(index, 1);
    this.emitPosts();
  }


}
