import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSubmitComponent } from './todo-submit.component';

describe('TodoSubmitComponent', () => {
  let component: TodoSubmitComponent;
  let fixture: ComponentFixture<TodoSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
