import { Injectable } from '@angular/core';
import { RequestContentsParams } from './models';
import { Observable, of } from 'rxjs';
import { retry, catchError, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  getContents(params: RequestContentsParams): Observable<Result<Paginator>> {
    
    const qs = new HttpParams();
    qs.append('index', params.index.toString());
    qs.append('rows', params.rows.toString());
    qs.append('order', params.order.toString());

    const url = 'assets/mocks/contents-list.json';
    return this.http.get<Result<Paginator>>(url, { params: qs })
      .pipe(
        debounceTime(500),
        retry(3),
        catchError(ServicesBase.handleError)
      );
  }

  //  发布新图
  newPost(description: string, file: any): Observable<Result> {
    let form = new FormData();
    form.append('file', file, file.name);
    form.append('description', description);

    const url = '';
    
    return this.http.post<Result<string>>(url, form)
      .pipe(
        debounceTime(500),
        retry(2),
        catchError(ServicesBase.handleError)
      );

    // return of(new Result('', {}));
  }
}
