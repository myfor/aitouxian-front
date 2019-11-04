import { Injectable } from '@angular/core';
import { RequestContentsParams, NewPostParams, Content } from './models';
import { Observable } from 'rxjs';
import { retry, catchError, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Result, Paginator, ServicesBase } from '../common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 获取内容列表
   * @param index 当前页码
   * @param rows 获取行数
   */
  getContents(params: RequestContentsParams): Observable<Result<Paginator<Content>>> {

    const qs = new HttpParams()
      .set('index', params.index.toString())
      .set('rows', params.rows.toString())
      .set('order', params.order.toString());

    const url = `/api/posts?${qs.toString()}`;
    // const url = 'assets/mocks/content-list-mock.json';

    return this.http.get<Result<Paginator>>(url)
      .pipe(
        debounceTime(500),
        retry(2),
        catchError(ServicesBase.handleError)
      );
  }

  //  发布新图
  newPost(newPost: NewPostParams): Observable<Result> {
    const form = new FormData();
    form.append('author', newPost.author);
    form.append('file', newPost.file, newPost.file.name);
    form.append('description', newPost.description);

    const url = '/api/posts';

    return this.http.post<Result<string>>(url, form)
      .pipe(
        debounceTime(500),
        retry(1),
        catchError(ServicesBase.handleError)
      );
  }

  /**
   * 点赞
   * @param id 点赞的 ID
   */
  like(id: number): Observable<HttpResponse<Result>> {
    const url = `/api/posts/like/${id}`;

    return this.http.put<Result>(url, '', { observe: 'response' })
      .pipe(
        debounceTime(500),
        retry(1),
        catchError(ServicesBase.handleError)
      );
  }
}
