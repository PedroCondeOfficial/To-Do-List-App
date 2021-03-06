import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodo(){
	  return new Promise((resolve, reject) => {
		  this.http.get('/todo')
		  	.map(res => res.json())
			.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
  }

  createTodo(data){
	  return new Promise((resolve, reject) => {
		  this.http.post('/todo', data)
		  	.map(res => res.json())
			.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
	  });
  }

  deleteTodo(id){
	  return new Promise((resolve, reject) => {
		  this.http.delete('/todo/'+id)
		  .map(res => res.json())
		  .subscribe(res => {
			  resolve(res);
		  }, (err) => {
			  reject(err);
		  });
	  });
  }

}
