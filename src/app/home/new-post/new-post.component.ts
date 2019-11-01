import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { PostService } from '../../services/posts/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  /**
   * 已被选择的文件
   */
  selectedFiles: any;
  /**
   * 描述
   */
  description: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
    public snack: MatSnackBar,
    private postService: PostService
    ) {}

  @ViewChild('files', { static: false }) private files: ElementRef;
  @ViewChild('preview', { static: false }) private preview: ElementRef;

  fileChange() {
    const eleFiles = this.files.nativeElement.files;
    if (eleFiles.length) {
      this.selectedFiles = eleFiles[0];
      this.preview.nativeElement.src = window.URL.createObjectURL(eleFiles[0]);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  publish() {
    //  检查有没有图片
    if (!this.selectedFiles) {
      this.snack.open('给张图片', '关闭', {
        duration: 2000
      });
      return;
    }

    this.postService.newPost(this.description, this.selectedFiles)
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
