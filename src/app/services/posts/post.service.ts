import { Injectable } from '@angular/core';
import { RequestContentsParams } from './models';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Result, Paginator } from '../common';

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
    
    const url = 'assets/mocks/contents-list.json';
    return this.http.get<Result<Paginator>>(url)
      .pipe(
        retry(3)
      );
  }
}
