# Employee Management System (Frontend)

This is a simple frontend implementation of an Employee Management System built with React. The project is role-based, where there are two primary roles: Admin and Employee. The Admin can create tasks for individual employees, view a dashboard with task statuses (New, Active, Completed, Failed), and manage all employee-related data. The Employee can view and accept or fail tasks assigned to them.

## Features

- **Admin Page:**
  - Create tasks for individual employees.
  - View a dashboard displaying the number of new, active, completed, and failed tasks for each employee.
  - Manage employee tasks.

- **Employee Page:**
  - View assigned tasks.
  - Accept or fail tasks based on the task status.
  
- **Role-Based Access:** 
  - Admin and Employee roles with different functionalities.

- **Local Storage:**
  - Local storage is used to save task data and user states.

## Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/af7e2495-625f-4ed9-b132-684bbb95e8c8)


### Admin Dashboard
![image](https://github.com/user-attachments/assets/7303bacf-77e6-4cc7-8e59-10da6e1a2a7b)


### Employee Page
![image](https://github.com/user-attachments/assets/f1b4d7d4-6cb5-4fc6-be47-5cb8253ece62)


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Local Storage**: For storing tasks and user data temporarily.
- **TailwindCSS**: For styling the frontend.

## Future Enhancements

- Full-stack implementation with a backend.
- Authentication and authorization.
- Real-time task updates using WebSockets.
- User management (Admin can add/remove employees).
