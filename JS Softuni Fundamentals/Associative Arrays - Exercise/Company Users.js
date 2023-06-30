function companyUsers(arrInput) {

    let companies = {};

    for (let line of arrInput) {
        let tokens = line.split(" -> ");
        let companyName = tokens[0];
        let employeeId = tokens[1];

        if (companies.hasOwnProperty(companyName)) {

            companies[companyName].add(employeeId);
        } else {
            let listOfEmployees = new Set([employeeId]);
            companies[companyName] = listOfEmployees;
        }

    }
    let sorted=Object.keys(companies).sort((a,b)=>a.localeCompare(b));
    for (let companyName of sorted) {
        console.log(companyName);
        for (let employeeId of companies[companyName]) {
            console.log("--",employeeId);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
);