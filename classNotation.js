/**
 * Define the Employee and Task concepts using the class notations
 */

// Task class defined to represent a task with a description and due date. 
class Task {
    constructor(taskDesc, dueDate) {
        this.taskDesc = taskDesc;
        this.dueDate = dueDate;
    }

    // Method to print the task details.
    printTask() {
        console.log('Description: ' + this.taskDesc + ' Due Date: ' + this.dueDate);
    }
}


// Employee class defined to represent an employee with their name, salary, and a list of designated tasks.
class Employee {
    constructor(empName, salary, tasks) {
        this.empName = empName;
        this.salary = salary;
        this.tasks = tasks;
    }

    // Method to print employee info (name and tasks).
    empInfo() {
        console.log('Name: ' + this.empName + ' Tasks >>> ');
        for (let task of this.tasks) {
            task.printTask();
        }
    }
}

// create the objects using the classes

// Instances of Task created using the Task class.
const task1 = new Task('prepare the budget', 'Jan-01');
const task2 = new Task('Conduct interviews', 'March');
const task3 = new Task('Write report', 'Jun');
const task4 = new Task('Present report', 'July')

// Instances of Employee with assigned tasks created using the Employee class
const emp1 = new Employee('Alice', 1000, [task1, task2]); 
const emp2 = new Employee('Bob', 2000, [task3, task4]);

// Calls the method to print the employee information (names and tasks).
emp1.empInfo();
emp2.empInfo();
