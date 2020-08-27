# QuizEngine

Quiz Management Tool for education establishment and training poviders.

Users are able dependent on role to view, create, update or delete quizzes and their associated questions with potential answers and correct answer for each.

![GitHub repo size](https://img.shields.io/github/repo-size/Stupot83/QuizEngine?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Stupot83/QuizEngine?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/Stupot83/QuizEngine?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Stupot83/QuizEngine?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Stupot83/QuizEngine?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Stupot83/QuizEngine?style=for-the-badge)

## Getting Started

To use the application as a User, please visit the following link at Heroku in Google Chrome on either a desktop, laptop, tablet or mobile:

`https://quizengine2020.herokuapp.com`

From here you can either run the application, or can click to install it as a PWA. To run the application locally for development purposes, please see the next section for more details.

### Prerequisites

To run the application locally for development, please clone the repository from Github, and cd into the root project directory.

Run `npm install` in the root of the project and allow the dependencies to install. You will also need to globally install nodemon. Once done, cd into the client directory and run `npm install` there also. This ensures that the backend and frontend setups are both installed ready to be run concurrently.

### Running Locally

To run the application locally, stay in the root project folder, and type:

`npm run dev`

which runs the backend and frontend concurrently. From here you will be able to view and use the application at `localhost:3000`.

You will be able to register which saves your details to the MongoDB Database hosted in an Atlas cluster, and login using these details.

From there, you can create quizzes and add questions to them.

## Running the tests

All the end to end tests were written using Cypress. To run the tests in the Cypress viewer, use the command:

`npm run test:cypress`

which runs the backend and frontend servers and opens the Chrome test viewer. You can run all specs or run them individually.

Unit tests for the React components were written using Jest and Enzyme. Please cd into the client folder and run

`npm test`

which runs the suite of unit tests and creates snapshots.

## Deployment

The application is hosted using Heroku at `https://quizengine2020.herokuapp.com`.

The application was built using Github Projects to manage the development work in conjunction with Github Actions to manage continuous integration into the master branch when development branches are pushed in via pull request. The master code is then pushed to the master version in Heroku.

## Built using MERN Stack

* Backend was built using Express and NodeJS.
* Database was constructed using MongoDB and Mongoose, and is hosted in Atlas.
* Frontend was built using React.js, React Router and Redux for state management.
* Node-sass was used for custom scss.
* Material-UI was used to build front-end components such as the Navbar and HamburgerMenu.
* Frontend uses a mix of class-based components and functional components.
* Application was end-to-end tested using Cypress and unit tested with Jest and Enzyme.

## Author

* **Stuart Priestley** - *Initial work* - [QuizEngine](https://github.com/Stupot83)