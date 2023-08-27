# Overview
This project aims to create an API for a platform that includes students, instructors, and courses.

Objectives
Development of an API that allows viewing students, instructors, and courses.
Conducting API tests using Postman.
Running the API in a Docker container.
Deploying the Docker container on AWS using preferred methods.
Adhering to AWS's best practice standards.
Allowing technology choices beyond Node.js and mongoose, while staying within the AWS ecosystem.
Optional addition of security protocols (e.g., JWT) or HTTPS usage.
Recommending the use of AWS Elastic Beanstalk.
Features
The project includes a registration and login screen. After registration, students and instructors' data are sent to the database. Once registered, users can access a personalized page with courses using their email and password.

# Encryption
For encryption, bcrypt is used to hash the "password."

# JWT (JSON Web Token)
JWT is used for authorization processes.

# Steps
## Local Deployment
To run locally, execute node app.js in the terminal. The correct output should resemble the following:

## Sign-Up Screen
Access the sign-up screen listening on PORT 4848 at http://localhost:4848/signup.

## Viewing Users in MongoDB
View the user's username, email, hashed password, registration, and update dates.

## Login Screen
Access the login screen listening on PORT 4848 at http://localhost:4848/.

## Student Courses
View a student's courses at http://localhost:4848/student.

## Instructor Courses
View instructor courses at http://localhost:4848/instructor.

# Important Notes
The project is still in development.
The function to add lessons for instructors can be found in lessonController.js but is currently inactive.
JWT functions and authorization processes are being developed.
Work is being done to resolve the issue where a registered user cannot use the POST method during login.
The project has not yet been deployed on Amazon servers.
Running on Your Own Server
Create a .env folder in your directory.
Inside the .env folder, add appropriate MONGO_URI and SECRET_TOKEN values.
You can run the project on any port beyond the pre-designated ones.
