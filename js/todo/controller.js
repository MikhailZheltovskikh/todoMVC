import Model from "./model.js";

const model = new Model()

model.addTask("Задача 1");
model.addTask("Задача 2");
model.addTask("Задача 3");
console.log(model);

model.removeTask(model.tasks[1]);
console.log(model);
model.saveToLocalStorage();