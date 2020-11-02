# Angular2+ Test

## About
This project is a re-write based on a skill test in vue.js for an undisclosed company. I based the development on the same project specifications.

### Demo
* https://davidfrendin.github.io/angular2-test/

## Requirements & dependencies
Node package manager (npm) is required: https://nodejs.org/en/download/

This project requires the angular client to be installed:

    npm install -g @angular/cli

Other dependencies are defined in the package.json file, install dependencies via command line:

    npm install

## Building
    ng serve --open

## Project
### Specification
-   Must be written in Angular2+
    -   Should contain multiple components - at minimum a component for listing images and a component for menu
-   May  **not**  use any CSS/layout framework (i.e. Bootstrap, Angular Material etc)
-   Displays images via API :  [https://picsum.photos/v2/list](https://picsum.photos/v2/list)
    -   API result is paginated, user must be able to navigate across resultset pages
        -   User should not be able to navigate to page <1
        -   User should not be able to navigate to pages beyond last page available
        -   User should be able to see current page number
        -   If a button for navigating pages is disabled, it should be visibly clear
    -   Author field and image id must be displayed on or below image
    -   When clicked on an image, the image url field should opens in a new tab
    -   User should be able to change number of results per page (1 to 100)
    -   Images should be presented in a grid-like fashion (rows and columns)
-   Responsive design; need not to be fully functional at mobile sizes but design should be able to scale across multiple screen-sizes (CSS media queries)
-   CSS should use  [BEM](http://getbem.com/introduction/)  (or similar) naming convention
-   No mockup or wireframes provided, testee is free to envision how to best present the work
-   The test should be submitted as a git repository with any instructions given in the README.md file
-   Dependencies should be included in package.json - the project should run as intended after npm install && ng serve

### Extra credit
-   Use SASS or similar CSS preprocessor
-   Use flexbox or css grid where appropriate
-   Debounce API call to prevent spamming the web service