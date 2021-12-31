# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## CI/CD Troubleshooting

## Deployment

The deployment flow is as follows:
GitHub Actions > AWS CodeDeploy > AWS EC2

Deploy could fail for one of several reasons:

1. The EC2 instance is stopped
2. The CodeDeploy Agent is not running in the EC2 instance
3. A stop script that no longer works is being run by the CodeDeploy Agent in EC2. This can be fixed by manually deploying a revision within CodeDeploy in the AWS Console and by selecting the option to not fail the deploy if a stop script fails to run successfully.
