const employees = [
    {
        "id": 1,
        "email": "a@b.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Submit report",
                "description": "Complete and submit the monthly report",
                "date": "2023-10-01",
                "category": "Report"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update database",
                "description": "Add new entries to the database",
                "date": "2023-09-25",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Team meeting",
                "description": "Participate in the team strategy meeting",
                "date": "2023-10-03",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "email": "c@b.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Client follow-up",
                "description": "Follow up with client on project status",
                "date": "2023-10-05",
                "category": "Client"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Code review",
                "description": "Review code from last sprint",
                "date": "2023-09-27",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Prepare presentation",
                "description": "Prepare slides for the quarterly review",
                "date": "2023-09-28",
                "category": "Presentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "d@b.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Create API",
                "description": "Develop and document new API endpoints",
                "date": "2023-10-04",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Resolve tickets",
                "description": "Handle open support tickets",
                "date": "2023-09-30",
                "category": "Support"
            }
        ]
    },
    {
        "id": 4,
        "email": "e@b.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Organize workshop",
                "description": "Plan and organize the upcoming workshop",
                "date": "2023-10-06",
                "category": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Update system",
                "description": "Apply security updates to the system",
                "date": "2023-09-29",
                "category": "Maintenance"
            }
        ]
    },
    {
        "id": 5,
        "email": "f@b.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Backup data",
                "description": "Perform a full system backup",
                "date": "2023-10-02",
                "category": "Maintenance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare report",
                "description": "Gather data and prepare the annual report",
                "date": "2023-10-07",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Onboard new hires",
                "description": "Assist with the onboarding process for new hires",
                "date": "2023-09-24",
                "category": "HR"
            }
        ]
    }
];

const admin = [
    {
        "id": 6,
        "email": "ad@b.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem("employees" , JSON.stringify(employees))
    localStorage.setItem("admin" , JSON.stringify(admin))
    
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees);
    console.log(admin);
    

}