import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-creation-component',
  templateUrl: './post-creation-component.component.html',
  styleUrls: ['./post-creation-component.component.scss']
})
export class PostCreationComponentComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuidler: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuidler.group(
      {
       title : ['', Validators.required], content : ['', Validators.required]
      }
    );
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const post = new Post(formValue['title'], formValue['content'],0);
    this.postsService.addPost(post);
    this.router.navigate(['/post-listing']);
  }

}
