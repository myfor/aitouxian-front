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
  currentIndex = 1;
  list: Content[] = [];
  loading = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    const params = new RequestContentsParams(
      this.currentIndex, 10, this.currentOrder
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
      this.currentIndex, 10, this.currentOrder
    );

    this.getMoreContents(params);
  }

  /**
   * 点击切换图片
   * @param index 索引
   */
  imgClick(index: number) {
    const currentImg = this.list[index];
    currentImg.currentPath =
      currentImg.currentPath === currentImg.thumbnailPath ?
      currentImg.sourceFilePath : currentImg.thumbnailPath;
  }

  /**
   * 刷新
   */
  refresh() {
    this.list = [];
    this.currentIndex = 1;
    const params = new RequestContentsParams(
      this.currentIndex, 10, this.currentOrder
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
        const list = this.setCurrentPath(data.data.list);
        this.list.push(...list);
        this.loading = false;
        this.currentIndex++;
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
        const list = this.setCurrentPath(data.data.list);
        this.list = list;
        this.loading = false;
        this.currentIndex++;
    });
  }

  /**
   * 获取到列表数据后初始化当前显示的图片
   */
  private setCurrentPath(contents: Content[]): Content[] {
    contents.forEach(content => {
      content.currentPath = content.thumbnailPath;
    });
    return contents;
  }

  /**
   * 点赞
   * @param id ID
   */
  like(id: number, index: number) {
    this.postService.like(id)
      .subscribe((resp) => {
        if (resp.status === 200) {
          this.list[index].likes++;
        } else {
          console.log(resp.status);
        }
      });
  }
}
