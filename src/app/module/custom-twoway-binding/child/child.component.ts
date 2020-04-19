import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ["message"],
  outputs: ["messageChange"]
})
export class ChildComponent implements OnInit {

  public message: string;
  public messageChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  public onInputModelChange = (): void => {
    this.messageChange.emit(this.message);
  }
}
