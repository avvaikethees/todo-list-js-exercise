// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
//BELOW - instead of arrays lets just put all these tasks into an object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
      },

      markCompleted: function () {
        this.complete = true;
      }
  };
  return task;
}


// DRIVER CODE BELOW
const task1 = newTask ("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask ("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logState(); // Clean Cat LItter has not been compelted
task1.markCompleted();
task1.logState(); // Clean Cat LItter Has been completed

