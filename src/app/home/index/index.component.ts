import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPostComponent } from '../new-post/new-post.component';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(public dialog: MatDialog) { }
  
  newPost(): void {
    const dialogRef = this.dialog.open(NewPostComponent, {
      width: '250px',
      data: {name: 'name', animal: 'animal'}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
