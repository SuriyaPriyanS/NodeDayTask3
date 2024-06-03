# Mentor-Student API

This project is a simple backend API for managing mentors and students. It allows creating mentors and students, assigning students to mentors, changing assignments, and retrieving information about the assignments.

## Features

- Create a Mentor
- Create a Student
- Assign a Student to a Mentor
- Assign multiple Students to a Mentor
- Change Mentor for a Student
- Retrieve all Students assigned to a Mentor
- Retrieve the previously assigned Mentor for a Student

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:
    ```bash
    
    cd assign-mentor
    ```https://github.com/SuriyaPriyanS/NodeDayTask3/

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your MongoDB connection string:
    ```env
    MONGO_URI=mongodb://localhost:27017/NodeTaskDay3
    ```

4. Start the server:
    ```bash
    npm run dev
    ```

The server will run on `http://localhost:5000`.

## API Endpoints

### Create a Mentor

- **URL**: `/api/mentor`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "Mentor Name"
  }


https://documenter.getpostman.com/view/26447196/2sA3QtfC66
