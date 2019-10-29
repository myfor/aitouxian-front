import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts/post.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  list = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  more() {
    this.postService.getContents(1, 10)
      .subscribe((data) => {
        return this.list = data;
      });
  }
}
