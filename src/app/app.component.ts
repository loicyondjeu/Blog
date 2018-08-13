import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   firstPost = new Post('Mon premier post', 'contenu', 2 );
   secondPost = new Post('Mon deuxieme post', 'contenu', -1 );
   anotherPost = new Post('encore un post', 'contenu', 0 );

  posts = [this.firstPost, this.secondPost, this.anotherPost];

 /* posts = [
    {
      title : 'Mon premier post',
      content : 'contenu',
      loveIts : 2,
      created_at: new Date()
    },
    {
      title : 'Mon deuxieme post',
      content : 'contenu',
      loveIts : -1,
      created_at: new Date()
    },
    {
      title : 'encore un post',
      content : 'contenu',
      loveIts : 0,
      created_at: new Date()
    }
  ];*/

}
