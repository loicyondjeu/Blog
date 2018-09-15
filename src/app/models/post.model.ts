export class Post {

  created_at: Date;

  constructor(public title: String, public content: String, public loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }
}
