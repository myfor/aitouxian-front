import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  order: string = '排序: 最新';

  constructor() { }

  ngOnInit() {
  }

  //  最新排序
  newestOrder() {
    this.order = '排序: 最新';
  }

  randomOrder() {
    this.order = '排序: 随机';
  }

  
}
