/**
 * @file    README.dox
 * @brief   Full Stack Student Management Application Documentation
 *
 * This project is a simple CRUD application to manage student records
 * using React JS (Frontend), Node.js & Express (Backend), and PostgreSQL (Database).
 *
 * Features:
 *  - Search students by name, major, or email
 *  - Add new students
 *  - Edit student details
 *  - Delete with confirmation
 *  - RESTful API using Express.js
 *  - Data stored in PostgreSQL
 *
 * Project Structure:
 *  - /client            : React frontend
 *  - /server            : Node.js + Express backend
 *  - /database          : PostgreSQL setup (SQL schema)
 *
 * Frontend (React JS):
 *  - Location: /client
 *  - Technologies: React, Axios, CSS
 *  - Setup:
 *      cd client
 *      npm install
 *      npm start
 *  - Runs on: http://localhost:5173
 *
 * Backend (Node.js + Express):
 *  - Location: /server
 *  - Technologies: Node.js, Express, CORS, PostgreSQL (pg)
 *  - Setup:
 *      cd server
 *      npm install
 *      node index.js
 *  - Runs on: http://localhost:3005
 *
 * Database (PostgreSQL):
 *  - Table Structure:
 *    CREATE TABLE students (
 *      studentid SERIAL PRIMARY KEY,
 *      name TEXT NOT NULL,
 *      major TEXT NOT NULL,
 *      email TEXT NOT NULL
 *    );
 *
 * API Endpoints:
 *  - GET    /students            : Get all students
 *  - POST   /students            : Add a new student
 *  - PATCH  /students/:studentid : Update a student
 *  - DELETE /students/:studentid : Delete a student
 *
 * Usage Notes:
 *  - Confirmation prompt before deleting a student
 *  - All fields required for add/update
 *  - Changes reflected immediately
 *
 * Learning Goals:
 *  - Integrate React with RESTful API
 *  - Manage form state and input handling
 *  - Use PostgreSQL for persistent storage
 *  - Implement full CRUD in a full-stack app
 *
<img width="2170" height="1667" alt="image" src="https://github.com/user-attachments/assets/d9377470-a52f-4e31-b20d-dae334069643" />
<img width="2968" height="1599" alt="image" src="https://github.com/user-attachments/assets/e612c7f5-a760-4db7-ba07-52ece42f5bc5" />
<img width="2924" height="1543" alt="image" src="https://github.com/user-attachments/assets/94b19059-190d-41d2-a221-d5607ce6591c" />
<img width="1382" height="1483" alt="image" src="https://github.com/user-attachments/assets/181f6f07-0938-4cee-9f4c-251add4028b8" />


 ## Acknowledgements
This project is based on the original work by [Deep Patil](https://github.com/deeppatil17/react_nodejs_postgresql).  
Special thanks for their contributions and inspiration.

 * 
 *
 * Tags:
 *  react, node, express, postgresql, crud, fullstack, student-management
 */
