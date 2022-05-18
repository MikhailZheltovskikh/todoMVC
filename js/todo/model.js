export default class Model {

  constructor() {
    this.tasks = [];
   this.loadFormLocalStorage()
  }

  loadFormLocalStorage(){
     const data = localStorage.getItem('tasks');
     if (data){
        this.tasks = JSON.parse(data);
     }
  }

  saveToLocalStorage(){
     localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(text) {
    const newTask = {
      status: "active",
      text: text,
    };
    this.tasks.push(newTask);
  }

  doneTask(task) {
    task.status = "done";
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    console.log(index);

    this.tasks.splice(index, 1)
  }
}
