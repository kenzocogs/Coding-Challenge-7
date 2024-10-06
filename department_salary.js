// Task 1: Create a Department Structure

const company = {
        departments: [
            {
                departmentName: 'TradingCards',
                employees: [
                    {
                        name: 'Leon',
                        salary: 151000,
                        subordinates: [
                            {
                             name: 'Steven',
                                salary: 10376,
                                subordinates: [
                                    {
                                        name: 'Calem',
                                        salary: 58888,
                                        subordinates: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Iris',
                        salary: 57075,
                        subordinates: []
                    }
                ]
            },
            {
                departmentName: 'BoardGames',
                employees: [
                    {
                        name: 'Serena',
                        salary: 85000,
                        subordinates: [
                            {
                                name: 'Cynthia',
                                salary: 70000,
                                subordinates: []
                            }
                        ]
                    },
                    {
                        name: 'Lance',
                        salary: 95000,
                        subordinates: []
                    }
                ]
            }
        ]
    };
console.log (company)

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary (department) {
// initializing total salary
  let totalSalary = 0;
// initial calculation
    for (let employee of department) {
       totalSalary += employee.salary;

       // using recursion here to include calculation of subordinate salary
        if (employee.subordinates.length > 0) {
            totalSalary += calculateDepartmentSalary (employee.subordinates)
        }
    }
return totalSalary;
}
const TradingCardSalary = calculateDepartmentSalary(company.departments[0].employees)
console.log(`Total Sales for the Trading Card Department: $${TradingCardSalary}`)
// Desired Output: $277339