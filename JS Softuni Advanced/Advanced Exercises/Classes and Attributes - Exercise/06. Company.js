class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name === '' || name === undefined || name === null || salary < 0 || salary === '' || salary === undefined || salary === null || position === '' || position === undefined || position === null || department === '' || department === undefined || department === null) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position, });

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment;
        let bestDepartmentAverageSalary = Number.MIN_SAFE_INTEGER;
        for (let department in this.departments) {
            let averageSalaryOfDepartment=0;
            for (let employee of this.departments[department]) {
                averageSalaryOfDepartment += employee.salary;
            }
            averageSalaryOfDepartment = averageSalaryOfDepartment / this.departments[department].length;
            if (averageSalaryOfDepartment > bestDepartmentAverageSalary) {
                bestDepartmentAverageSalary = averageSalaryOfDepartment;
                bestDepartment =department;
           }
        }

        let sorted=this.departments[bestDepartment].sort((a,b)=>b.salary-a.salary || a.name.localeCompare(b.name));

        let infoAboutBestDeprtment=`Best Department is: ${bestDepartment}\nAverage salary: ${bestDepartmentAverageSalary.toFixed(2)}\n`;

        for (let employee of sorted) {
            infoAboutBestDeprtment+=`${employee.name} ${employee.salary} ${employee.position}\n`;
        }
        infoAboutBestDeprtment=infoAboutBestDeprtment.slice(0,-1);

        return infoAboutBestDeprtment;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
