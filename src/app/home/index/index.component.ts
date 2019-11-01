import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }
  
  newPost(): void {
    const dialogRef = this.dialog.open(NewPostDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

/**
 * 新帖子弹窗
 */
@Component({
  selector: 'new-post-dialog',
  templateUrl: 'new-post-dialog.html',
})
export class NewPostDialog {

  constructor(
    public dialogRef: MatDialogRef<NewPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}