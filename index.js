function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: () => {
      console.log(`${task.title} has${task.complete ? " " : ' not '}been completed`);

      // console.log('The title is: ',task2.title)
    },

    markCompleted: () => {
      task.complete = true
    }

  };
  return task;
};



//driver code below
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

// console.log('The title is: ',task2.title)

console.log(tasks[1])

task2.logState();
task2.markCompleted();
task2.logState();
