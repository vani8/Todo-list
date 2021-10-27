import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }
  inputTodo:string = "";
  
  ngOnInit(): void {
    this.todos = [
      {
      text: 'test',
      completed:false
    }
  ]
  }

  // addTodo(todo: Todo){
  //   this.todos.push(todo)
  // }
  // onFormSubmit(form: NgForm){
  //   if(form.invalid) return alert("please enter todo")
  //   this.addTodo(new Todo(form.value.text))
  //   form.reset()
  // }

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }
  deleteTodo (id:number) {
    this.todos.splice(id, 1);
  }

  addTodo () {
    this.todos.push({
      text: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }

}
