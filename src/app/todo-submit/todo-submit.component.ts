import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-submit',
  templateUrl: './todo-submit.component.html',
  styleUrls: ['./todo-submit.component.css']
})
export class TodoSubmitComponent implements OnInit {

  todo = {};

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTask(){
	this.todoService.createTodo(this.todo).then((result) => {
		let id = result['_id'];
		window.location.reload();
	});
  }

}
