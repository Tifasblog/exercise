console.log("Hello from v3 From Tifa")


var todos = {
  todos: ["todo1", "todo2", "todo3"],
  displayTodos: function() {
    console.log('My todos:', this.todos);    
  
  },
  addTodos: function (todo) {
    this.todos.push(todo);
    this.displayTodos()
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos()
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}