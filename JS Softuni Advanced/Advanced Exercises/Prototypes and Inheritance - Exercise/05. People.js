function solution() {
    class Employee {
        salary = 0;
        dividend = 0;
        tasks = [];
        #count = 0;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        work() {
            console.log(this.tasks[this.#count++]);
            if (this.#count===this.tasks.length) {
                this.#count=0;
            }
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    class Junior extends Employee {
        tasks = [`${this.name} is working on a simple task.`];
        constructor(name, age) {
            super(name, age);
        }
    }
    class Senior extends Employee {
        tasks = [`${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
        ];
        constructor(name, age) {
            super(name, age);
        }
    }
    class Manager extends Employee {
        tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
        constructor(name, age) {
            super(name, age);
        }
    }
    return { Employee, Junior, Senior, Manager };
}

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  

