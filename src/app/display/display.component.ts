import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { RouterModule } from '@angular/router';
import { TodoSubmitComponent } from '../todo-submit/todo-submit.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  todos: any;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
	  this.getTasks();
  }

  getTasks(){
	  this.todoService.getTodo().then((res) => {
  	  this.todos = res;
  	  });
  }

  deleteTask(id){
	  this.todoService.deleteTodo(id).then((res)=>{
		  window.location.reload();
	  })
  }


}
