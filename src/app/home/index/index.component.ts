import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(public dialog: MatDialog) { }
  
  newPost(): void {
    const dialogRef = this.dialog.open(NewPostComponent, {
      width: '34rem'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
