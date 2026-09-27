import { Component } from '@angular/core';
import { USER_LIST_DATA } from '../../data/user-list-data';
import { POST_LIST_DATA } from '../../data/post-list-data';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UsersList {

  users: any[] = USER_LIST_DATA.users;

  posts: any[] = POST_LIST_DATA.posts;

  getPostsByUser(userId: number) {

    return this.posts.filter((post) => post.userId === userId);

  }

}