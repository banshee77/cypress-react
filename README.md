This project was implemented by TeamQoQ for Flight Hackathon 2020. 

It consists DEMO React Application together with Cypress Framework used for Web E2E testing.<br />

Test Cases has been written for:
* DEMO React Application [http://localhost:3000](http://localhost:3000)


### NPM Settings

Ensure that .npmrc has correct nexus token. Set token as $NPM_TOKEN environment variable.<br />
In case of issues try to replace $NPM_TOKEN with nexus token in .npmrc file

**Note: You can have also .npmrc file in your user directory.**


### Cypress Settings

Set environment variables used during the testing. 

set CYPRESS_username=global_domain_sg<br />
set CYPRESS_password=global_domain_sg_password


## Available Scripts

In the project directory, you can run:


### `npm install`

Installs all required dependencies.


### `npm run cy:ci`

All in one. It will start server and run all tests. 


### `npx mochawesome-merge ./cypress/results/*.json -o ./cypress/results/final_report.json && npx marge ./cypress/results/final_report.json -f final_report.html -o cypress/results`

Generates user frendly html report from test execution.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run cy:run_demo`

Launches Cypress Web E2E testing in headless mode. <br />
It includes test scenarios for:
* DEMO React Application


### `npm run cy:run`

Launches all test cases.


### `npx cypress run --spec ./cypress/integration/e2e-tc02-demo-form.js`

Launches specific test case.


## Additional information

* **Test Cases** are stored ./cypress/integration/
* **Test execution reports** are stored ./cypress/results/
* **Test execution video recordings** are stored ./cypress/video/
* **Jenkinsfile** is used for CI/CD pipeline