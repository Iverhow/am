import { Component, Inject, ViewChildren, QueryList } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatRipple } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(HelloWorldDialogComponent, {
      data: 'Hello World!'
    });
  }
}

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.html',
})
export class HelloWorldDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  @ViewChildren(MatRipple)
  ripple: QueryList<MatRipple>;

  triggerRipple() {
    this.ripple.forEach(_ => _.launch({centered: true}));
  }
}
