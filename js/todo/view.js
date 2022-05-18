export default class View{
   constructor(tasks){
      tasks.forEach((task) => {
         this.renderTask(task);
      });
   }

      elements = {
         input: document.getElementById("newTask"),
         form: document.getElementById("form"), 
         taskList: document.getElementById("taskList"),   
      }
   



   renderTask (taskObject){

      const completedClass = taskObject.status === "done" ? 'completed' : " ";
      const checked = taskObject.status === "done" ? 'checked' : " ";

      const taskHTML = `<li class="todo-item" data-id="${taskObject.id}">
                           <label class="todo-item-label">
                              <input class="checkbox" type="checkbox" ${checked}/>
                              <span class="${completedClass}">${taskObject.text}</span>
                              <button data-delete class="btn btn-secondary btn-sm">Удалить</button>
                           </label>
                        </li>`;
      this.elements.taskList.insertAdjacentHTML('beforeend', taskHTML);               
   }

   clearInput(){
      this.elements.input.value = " ";
   }
   changeStatus(taskObject){
      const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
      const taskTextEl = taskElement.querySelector('span');
      if(taskObject.status === "done"){
         taskTextEl.classList.add('completed');
      }else{
         taskTextEl.classList.remove('completed');
      }
   
   }
   removeTask(taskObject){
      const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
      taskElement.remove();
   }


}