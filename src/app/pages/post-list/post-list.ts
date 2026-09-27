import { Component } from '@angular/core';
import { POST_LIST_DATA } from '../../data/post-list-data';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

  posts: any[] = POST_LIST_DATA.posts;

}