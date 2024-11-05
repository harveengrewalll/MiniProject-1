// This function is no longer used.
function empInfo() {
    console.log('Name: ' + this.empName + ' Tasks >>> ');
    for (let t of this.task)
        t.printTask();
}

// This function is also no longer used.
function printTask() {
    console.log('Description: '+ this.taskDec + ' Due Date: ' + this.dueDate);
} 

// The employee constructor from the constructorFunctions file was pasted here.
function Employee (empName, salary, task) {
    this.empName = empName;
    this.salary = salary;
    this.task = task;
    
    this.empInfo = function() {
        console.log('Name: ' + this.empName + ' Tasks >>>');
        for (let t of this.task ) {
            t.printTask();
        }
    };
}

// The task constructor from the constructorFunctions file was pasted here.
function Task (taskDesc, dueDate) {
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;

    this.printTask = function() {
        console.log('Description: ' + this.taskDesc + ' Due Date: ' + this.dueDate);
    };
}

// The task constructor is called to create 4 new instances of tasks.
let task1 = new Task('prepare the budget', 'Jan-01');
let task2 = new Task('Conduct interviews', 'March');
let task3 = new Task('Write report', 'Jun');
let task4 = new Task('Present report', 'July');

// The employee constructor is called to create 2 new instances of task.
let emp1 = new Employee('Alice', 1000, [task1, task2]);
let emp2 = new Employee('Bob', 2000, [task3, task4]);

// The method is called to print employee information (name and tasks).
emp1.empInfo();
emp2.empInfo();
/* The output matches the original output from the unmodified plainObjects.js file, however, 
this approach is much cleaner. */