function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //////to do
      let textElement = document.querySelector('#inputs textarea');
      
      let arrRestaurant = JSON.parse(textElement.value);
      let restaurants = {};

      for (let el of arrRestaurant) {
         let [restaurantName, employeesWithSalaries] = el.split(' - ');
         employeesWithSalaries = employeesWithSalaries.split(', ');
         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         }

         for (let line of employeesWithSalaries) {
            let [employee, salary] = line.split(' ');
            salary = Number(salary);
            restaurants[restaurantName][employee] = salary;
         }

      }

      for (let restaurant in restaurants) {
         let averageSalary = 0;
         for (let person in restaurants[restaurant]) {
            averageSalary += restaurants[restaurant][person];
         }
         let count = Object.keys(restaurants[restaurant]).length;
         averageSalary = Number((averageSalary / count).toFixed(2));
         restaurants[restaurant]['Average Salary'] = averageSalary;

      }

      let restaurantsArr = Object.keys(restaurants);
      let bestRestaurant=0;
      for (let i = 0; i < restaurantsArr.length - 1; i++) {
         let firstRestaurantAvrgSalary = restaurants[restaurantsArr[i]]['Average Salary'];
         let secondRestaurantAvrgSalary = restaurants[restaurantsArr[i + 1]]['Average Salary'];
         bestRestaurant = (firstRestaurantAvrgSalary >= secondRestaurantAvrgSalary) ? restaurantsArr[i] : restaurantsArr[i + 1];

      }


      let arrSortedWorkersBySalary = Object.entries(restaurants[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      arrSortedWorkersBySalary=arrSortedWorkersBySalary.filter(x=>x[0]!=='Average Salary');
      let bestSalary=arrSortedWorkersBySalary[0][1].toFixed(2);
      let averageSalaryOfBestRestaurant=restaurants[bestRestaurant]['Average Salary'].toFixed(2);

      let bestRestaurantElement=document.querySelector('#outputs #bestRestaurant p');
      let workersElement=document.querySelector('#outputs #workers p');

      bestRestaurantElement.textContent=`Name: ${bestRestaurant} Average Salary: ${averageSalaryOfBestRestaurant} Best Salary: ${bestSalary}`
      
      let outputWorkersAtBestResataurant="";
      for (let [worker,salary] of arrSortedWorkersBySalary) {
         let workerInfo=`Name: ${worker} With Salary: ${salary} `;
         outputWorkersAtBestResataurant+=workerInfo;
      }
      
      workersElement.textContent=outputWorkersAtBestResataurant;
      
   }
}