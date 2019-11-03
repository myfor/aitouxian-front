import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts/post.service';
import { RequestContentsParams, PostOrder, Content } from '../../services/posts/models';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  //  当前排序描述
  order = '排序: 最新';
  //  当前排序枚举
  currentOrder: PostOrder = PostOrder.Newest;
  list: Content[] = [];
  loading = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    const params = new RequestContentsParams(
      1, 10, this.currentOrder
    );
    this.getContents(params);
  }

  //  最新排序
  newestOrder() {
    const NEWEST_ORDER = '排序: 最新';
    if (this.order === NEWEST_ORDER) {
      return;
    }
    this.currentOrder = PostOrder.Newest;

    const params = new RequestContentsParams(
      1, 10, this.currentOrder
    );

    this.getContents(params);

    this.order = NEWEST_ORDER;
  }

  randomOrder() {
    const RANDOM_ORDER = '排序: 随机';
    if (this.order === RANDOM_ORDER) {
      return;
    }
    this.currentOrder = PostOrder.Random;

    const params = new RequestContentsParams(
      1, 10, this.currentOrder
    );

    this.getContents(params);

    this.order = RANDOM_ORDER;
  }

  more() {
    const params = new RequestContentsParams(
      1, 10, this.currentOrder
    );

    this.getMoreContents(params);
  }

  imgClick(event: Event, path: string) {
    console.log(event);
    // event.target.src = path;
    alert(path);
  }

  /**
   * 刷新
   */
  refresh() {
    this.list = [];
    const params = new RequestContentsParams(
      1, 10, this.currentOrder
    );
    this.getContents(params);
  }

  /**
   * 获取更多的列表内容
   * @param params 参数
   */
  private getMoreContents(params: RequestContentsParams) {
    this.loading = true;
    this.postService.getContents(params)
      .subscribe((data) => {
        const list = data.data.list;
        this.list.push(...list);
        this.loading = false;
      });
  }

  /**
   * 获取列表内容
   * @param params 参数
   */
  private getContents(params: RequestContentsParams) {
    this.loading = true;
    this.postService.getContents(params)
      .subscribe((data) => {
        const list = data.data.list;
        this.list = list;
        this.loading = false;
    });
  }

  /**
   * 
   * @param id 点赞
   */
  like(id: number) {
    console.log(id);
  }
}
