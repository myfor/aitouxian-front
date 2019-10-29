import { Injectable } from '@angular/core';
import { Content } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  /**
   * 获取内容列表
   * @param index 当前页码
   * @param rows 获取行数
   */
  getContents(index: number, rows: number): Observable<Content[]> {
    return of([]);
  }
}
