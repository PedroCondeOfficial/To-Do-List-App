import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TodoSubmitComponent } from './todo-submit/todo-submit.component';

import { TodoService } from './todo.service';

const routes = [
		{
			path: '', redirectTo: 'todo', pathMatch: 'full'
		},
		{
			path: 'todo', component: DisplayComponent
		}
	];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TodoSubmitComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [TodoService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
