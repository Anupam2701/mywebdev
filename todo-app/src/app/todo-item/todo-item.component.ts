// todo-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
