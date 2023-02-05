import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Data } from '../data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['rollno', 'name', 'regno', 'email', 'actions'];
  data: Data[] = [
    {rollno: 'B73', name: 'Faizan', regno: '2020bcs516', email:'2020bcs516@sggs.ac.in'},
    {rollno: 'B72', name: 'Javeriya', regno: '2020bcs515', email:'2020bcs515@sggs.ac.in'},
    {rollno: 'B74', name: 'John', regno: '2020bcs517', email: '2020bcs517@sggs.ac.in'},
    {rollno: 'B75', name: 'Jane', regno: '2020bcs518', email: '2020bcs518@sggs.ac.in'},
    {rollno: 'B76', name: 'Jim', regno: '2020bcs519', email: '2020bcs519@sggs.ac.in'},
    {rollno: 'B77', name: 'Kate', regno: '2020bcs520', email: '2020bcs520@sggs.ac.in'},
    {rollno: 'B78', name: 'Tom', regno: '2020bcs521', email: '2020bcs521@sggs.ac.in'},
    {rollno: 'B79', name: 'Jerry', regno: '2020bcs522', email: '2020bcs522@sggs.ac.in'},
    {rollno: 'B80', name: 'Sophie', regno: '2020bcs523', email: '2020bcs523@sggs.ac.in'},
    {rollno: 'B81', name: 'Olivia', regno: '2020bcs524', email: '2020bcs524@sggs.ac.in'},
    {rollno: 'B82', name: 'Noah', regno: '2020bcs525', email: '2020bcs525@sggs.ac.in'},
    {rollno: 'B83', name: 'Emma', regno: '2020bcs526', email: '2020bcs526@sggs.ac.in'},
  ];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  delete(element: Data) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {name : element.name}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data = this.data.filter(e => e !== element);
        this.snackBar.open(`${element.name} deleted successfully`, '', {
          duration: 2000,
        });
      }
    });
  }
}
