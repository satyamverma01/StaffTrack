const employees= [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Compile weekly sales data and summarize in Excel.",
          "taskDate": "2025-09-06",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend project status meeting with the team.",
          "taskDate": "2025-09-07",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Update Client Records",
          "taskDescription": "Add new client contact details to CRM.",
          "taskDate": "2025-09-08",
          "category": "Data Entry",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage UI",
          "taskDescription": "Create wireframes and mockups for homepage redesign.",
          "taskDate": "2025-09-06",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve navigation bar issue on mobile devices.",
          "taskDate": "2025-09-07",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Deploy Staging Build",
          "taskDescription": "Push latest code changes to staging environment.",
          "taskDate": "2025-09-08",
          "category": "Deployment",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Write API Documentation",
          "taskDescription": "Document authentication API endpoints.",
          "taskDate": "2025-09-09",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Call Vendor",
          "taskDescription": "Confirm delivery schedule with office supplies vendor.",
          "taskDate": "2025-09-06",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Count stock in warehouse section B.",
          "taskDate": "2025-09-07",
          "category": "Inventory",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Submit Invoice",
          "taskDescription": "Send invoice #450 to finance team.",
          "taskDate": "2025-09-08",
          "category": "Finance",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Test Payment Gateway",
          "taskDescription": "Run test transactions on new payment integration.",
          "taskDate": "2025-09-06",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update User Guide",
          "taskDescription": "Revise screenshots in the onboarding manual.",
          "taskDate": "2025-09-07",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Security Audit",
          "taskDescription": "Check password encryption and token expiration.",
          "taskDate": "2025-09-08",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Dashboard Graph",
          "taskDescription": "Correct data labels on sales dashboard graph.",
          "taskDate": "2025-09-09",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Training Slides",
          "taskDescription": "Create slides for new employee orientation.",
          "taskDate": "2025-09-06",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Organize Files",
          "taskDescription": "Sort and archive old HR documents.",
          "taskDate": "2025-09-07",
          "category": "Administration",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Employee Feedback",
          "taskDescription": "Collect feedback from staff on workplace improvements.",
          "taskDate": "2025-09-08",
          "category": "HR",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Recruitment Drive",
          "taskDescription": "Schedule interviews for software engineer role.",
          "taskDate": "2025-09-09",
          "category": "Recruitment",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile HR metrics for August 2025.",
          "taskDate": "2025-09-10",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];

const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}
