import { Component } from '@angular/core';
import { Todo } from './todo.js';
import { NgModule } from '@angular/core';
import { roll } from './animate';
import {
  trigger,
  transition,
  style,
  state,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // trigger('fade', [
    //   transition('void => *', [
    //     style({
    //       backgroundColor: '#dfe4ea',
    //       opacity: 0.01,
    //     }),
    //     animate(500),
    //   ]),
    // ]),
    roll,
  ],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sunnone';
  date = new Date();
  name = 'cdcds';
  todoValue: String;
  list: Todo[];
  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }
  addItem() {
    if (this.todoValue != '') {
      const newItem: Todo = {
        id: Date.now(),

        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }
  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
