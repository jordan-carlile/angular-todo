import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  name:string;

  constructor() { }

  ngOnInit() {
    this.name = "TOODOO";
    this.todos = [
      {
        id: 1,
        title: "Todo One",
        completed: false
      },
      {
        id: 2,
        title: "Todo Two",
        completed: true
      },
      {
        id: 3,
        title: "Todo Three",
        completed: false
      }
    ]
  }

}