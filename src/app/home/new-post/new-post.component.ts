import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { PostService } from '../../services/posts/post.service';
import { NewPostParams } from '../../services/posts/models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  /**
   * 已被选择的文件
   */
  selectedFile: any;
  /**
   * 描述
   */
  description = '';
  /**
   * 昵称
   */
  author = '';

  constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
    public snack: MatSnackBar,
    private postService: PostService
    ) {}

  @ViewChild('files', { static: false }) private files: ElementRef;
  @ViewChild('preview', { static: false }) private preview: ElementRef;

  ngOnInit(): void {
    if (!this.author) {
      this.author = localStorage.getItem('__AUTHOR__');
      if (!this.author) {
        this.author = '匿名';
      }
    }
  }

  fileChange() {
    const eleFiles = this.files.nativeElement.files;
    if (eleFiles.length) {
      this.selectedFile = eleFiles[0];
      this.preview.nativeElement.src = window.URL.createObjectURL(eleFiles[0]);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  publish() {
    //  检查有没有图片
    if (!this.selectedFile) {
      this.snack.open('给张图片', '关闭', {
        duration: 2000
      });
      return;
    }

    localStorage.setItem('__AUTHOR__', this.author);

    const params: NewPostParams = new NewPostParams(
      this.author, this.description, this.selectedFile
    );

    this.postService.newPost(params)
      .subscribe(() => {
        this.snack.open('发布成功', '关闭', {
          duration: 1000
        });
        this.dialogRef.close();
      },
      error => this.snack.open('发生错误, 请重试', '关闭', {
        duration: 1000
      })
    );

  }
}
