// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'TradingCards',
            employees: [
                {
                    name: 'Lazareth',
                    salary: 23000,
                    subordinates: [
                        {
                            name: 'Kenneth',
                            salary: 12575,
                            subordinates: []
                        }
                    ]
                }
            ]
        },
        {
            deparmentName: 'BoardGames',
            employees: [
                {
                    name: 'Madam Kirlia',
                    salary: 84200,
                    subordinates: [
                        {
                            name: 'Serena',
                            salary: 39820,
                            subordinates: [
                                {
                                    name: 'Cynthia',
                                    salary: 12575,
                                    subordinates: []
                                }
                            ]                    
                        }
                    ]
                },
                {
                    name: 'Lance',
                    salary: 45040,
                    subordinates: []
                }
            ]
         },
         {
            departmentName: 'CustomerSupport',
            employees: [
                {
                    name: 'Unnamed Intern',
                    salary: 4310,
                    subordinates: []
                }
            ]
         }    
    ]
};

console.log (company)