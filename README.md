# QuizEngine

Quiz Management Tool for education establishment and training poviders.

Users are able dependent on role to view, create, update or delete quizzes and their associated questions with potential answers and correct answer for each. Please refer to the User Quide for information regarding the different user roles and more detailed instructions on how to use the application.

![GitHub repo size](https://img.shields.io/github/repo-size/Stupot83/QuizEngine?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Stupot83/QuizEngine?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/Stupot83/QuizEngine?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Stupot83/QuizEngine?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Stupot83/QuizEngine?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Stupot83/QuizEngine?style=for-the-badge)

## Prerequisites

To run the application locally for development, please clone the repository from Github, and cd into the root project directory.

Run `npm install` in the root of the project and allow the dependencies to install. You will also need to globally install nodemon. Once done, cd into the client directory and run `npm install` there also. This ensures that the backend and frontend setups are both installed ready to be run concurrently.

### Running Locally

To run the application locally, stay in the root project folder, and type:

`npm run dev`

which runs the backend and frontend concurrently. From here you will be able to view and use the application at `localhost:3000`.

As a restricted user, you will be able to register which saves your details to the MongoDB Database hosted in an Atlas cluster, and login using these details.

From there, you can view quizzes and their questions with potential answers.

To access additional features, you will need to login as an established user already stored in the database, who have had the View or Edit roles added to them. You cannot change the user role to anything higher than restricted when setting up a new user in the UI, this is all controlled through the database.

As a View user logged in, you will be able to view all quizzes and their questions with potential answers. You will also be able to view the correct answer for a question.

As an Edit user logged in, you will be able to view all quizzes and their questions with potential answers and correct answers. You will also have the ability to perform CRUD operations on quizzes and their questions.

## Running the tests

All the end to end tests were written using Cypress. To run the tests in the Cypress viewer, use the command:

`npm run test:cypress`

which runs the backend and frontend servers and opens the Chrome test viewer. You can run all specs or run them individually.

Unit tests for the React components were written using Jest and Enzyme. Please cd into the client folder and run

`npm test`

which runs the suite of unit tests and creates snapshots.

## Built using MERN Stack

* Backend was built using Express and NodeJS.
* Database was constructed using MongoDB and Mongoose, and is hosted in Atlas.
* Frontend was built using React.js, React Router and Redux for state management.
* Node-sass was used for custom scss.
* Material-UI was used to build front-end components such as the Navbar and HamburgerMenu.
* Frontend uses a mix of class-based components and functional components.
* Application was end-to-end tested using Cypress and unit tested with Jest and Enzyme.
* User can have three different roles, with Restricted as default, View and Edit having further permissions.

## Author

* **Stuart Priestley** - *Initial work* - [QuizEngine](https://github.com/Stupot83)