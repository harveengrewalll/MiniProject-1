/**
 * Define the Employee and Task concepts using the constructor functions
 */

// Employee constructor to store employee name, salary and task(s).
function Employee (empName, salary, task) {
    this.empName = empName;
    this.salary = salary;
    this.task = task;
    
    // Prints the employee information - specifically, the employee's name and their tasks.
    this.empInfo = function() {
        console.log('Name: ' + this.empName + ' Tasks >>>');
        for (let t of this.task ) {
            t.printTask();
        }
    };
}

// Task constructor to store task description and task due date.
function Task (taskDesc, dueDate) {
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;

    // Prints the task's description and due date.
    this.printTask = function() {
        console.log('Description: ' + this.taskDesc + ' Due Date: ' + this.dueDate);
    };
}


// Create the objects using the constructor functions

let task1 = new Task('prepare the budget', 'Jan-01');
let task2 = new Task('Conduct interviews', 'March');
let task3 = new Task('Write report', 'Jun');
let task4 = new Task('Present report', 'July');

let emp1 = new Employee('Alice', 1000, [task1, task2]);
let emp2 = new Employee('Bob', 2000, [task3, task4]);

// The method is called to print employee information (name and tasks).
emp1.empInfo();
emp2.empInfo();

