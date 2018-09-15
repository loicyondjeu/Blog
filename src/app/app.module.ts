import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostCreationComponentComponent } from './post-creation-component/post-creation-component.component';

import {PostsService} from './services/posts.service';

const appRoutes: Routes = [
  {path: 'post-listing', component: PostListComponentComponent},
  {path: 'post-creation', component: PostCreationComponentComponent},
  {path: '', component: PostListComponentComponent},
  {path: '**', component: PostListComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    PostCreationComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
