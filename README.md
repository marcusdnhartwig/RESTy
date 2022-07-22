# RESTy

# Phase 1: 

*Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner*

## Technical Requirements / Notes

*The application, as written by our development team was done using class components as a proof of concept. In order to go to production, we’re going to have to convert this to an application written using React function components so that our foundation is both stable and high performing.*

Refactor the RESTy application as follows:

1. Convert all child components of App.js from classes to functions
  
  - The App component serves as the container for all sub-components of this application.
  
  - Leave this component as a Class.
  
  - Make sure all base styles for App are included in a .scss imported within App.js.
  
  - Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.

2. Use .scss files to style each component

  - Each of the components use their own .scss file for styling.

3. Core application functionality should remain unchanged:

  - The < Form> component should:

    - Call a function on submit that updates the < App/> component via a function sent down as a prop so that the app can process the form values.

  - The < Results/> component should show mock API results.

## Lab 26
![img](/assets/Screen%20Shot%202022-07-18%20at%205.43.32%20PM.png)

# Phase 2:

*we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components*

## User Stories:

- As a user, I want to enter the REST Method and URL to an API

- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format

## Application Flow:

- User enters an API URL

- Chooses a REST Method

- Clicks the “Go” button

- Application fetches data from the URL given, with the method specified

- Displays the response headers and results separately

- Both headers and results should be “pretty printed” JSON

## Technical Requirements / Note

*Extend your React Application so that your functional components are able to manage their own state variables using the useState Hook.* 
*NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data*

1. Refactor any components using this.setState to implement the useState react API hook.

2. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

## Tests

- Install the React Testing Library framework

- Assert that upon submitting the form will result in data being rendered in the output area

- Install the GitHub action that will auto-run your tests on all check-ins

## Lab 27:

![img](./assets/Screen%20Shot%202022-07-21%20at%205.21.21%20PM.png)

# Phase 3

 - We will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests.

## User Stories:

* As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data

* As a user, I want to see the results returned from an API request in my browser in a readable format

## Application Flow:

* User enters an API URL

* Chooses a REST Method

* Clicks the “Go” button

* Application fetches data from the URL given, with the method specified

* Displays the response headers and results separately

* Both headers and results should be “pretty printed” JSON

## Technical Requirements / Note

*Extend your application to include the ability to send http requests and display response data, when the Form experiences a submission event.*

1. Refactor application methods to allow for browser side HTTP requests to be sent.

  * Your implementation should allow the user to set a url, method, and request body.

2. Make sure all relavent request and response data is displayed to the User.

## Testing

- Install the React Testing Library framework

- Assert that upon submitting the form will result in data being rendered in the output area

- You will need to “mock” the API request with React Testing Library

  - Note the example here: https://testing-library.com/docs/react-testing-library/example-intro/

    - This shows how to use the msw package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API

# Phase 4

In phase 4, we will be tracking every API call and storing it in history

## User Stories

As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly

## Aplication Flow

* User enters an API URL

* Chooses a REST Method

* Clicks the “Go” button

* Application fetches data from the URL given, with the method specified

* Application stores the API request and returned data into state

  * Updates the list of previous API calls

* Application Displays the response headers and results separately

  * Both headers and results should be “pretty printed” JSON

## Technical Requirements / Note

*Refactor your state management within the App component to use the useReducer hook.*

1. Replace any component state managements to use derived state from useReducer with a reducer function and intitial state.

## Testing

1. Install the React Testing Library framework.

2. Assert that upon submitting the form will result in data being rendered in the output area.

3. You will need to “mock” the API request with React Testing Library.

  - Note the example here: https://testing-library.com/docs/react-testing-library/example-intro/

    - This shows how to use the msw package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API.

![img](./assets/Screen%20Shot%202022-07-21%20at%205.19.11%20PM.png)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
