// todo-list.component.ts
import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
