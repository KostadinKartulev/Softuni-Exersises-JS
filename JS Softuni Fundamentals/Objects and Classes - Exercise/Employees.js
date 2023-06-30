function employees(arrString) {
    
    class Employee{
        constructor(name){
           this.name=name,
            this.length=name.length
        }
    }
    let arrEmployees=[];
    for (let employeeName of arrString) {
        let employee=new Employee(employeeName);
        arrEmployees.push(employee);
    }
    for (const employee of arrEmployees ) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.length}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );