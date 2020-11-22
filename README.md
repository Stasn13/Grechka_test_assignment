# Grechka_test_assignment
test task for position of react developer

### To run project follow next steps:

<pre>
$ git clone https://github.com/Stasn13/Grechka_test_assignment.git <br/>
$ cd ui-news <br/>
$ npm install  <br/>
$ npm run dev 
</pre>

or using yarn

<pre>
$ cd ui-news <br/>
$ yarn <br/>
$ yarn dev 
</pre>

### To run the local Node.js server follow this steps

<pre>
$ cd express-server-news <br/>
$ node index.js 
</pre>

## Technologies:

-React<br/>
-Redux/Saga<br/>
-Material UI kit<br/>
-SCSS<br/>
-TypeScript<br/>

## Project structure:

-<b>Layout</b> folder should contains basic page elements, where you can add header, footer, navigation, etc.<br/>

-In <b>pages</b> folder you can organize and manage routes of current app.<br/>

-<b>components</b> folder is used for declaration of common re-usable components.<br/>

-<b>Redux</b> contains actions, reducers and sagas to control your store and api requests. Files in this folder should be named properly, so the developer can understand which part of the store it belongs. Do not forget to use constants.<br/>

-<b>utils</b> contains re-usable function-helpers to solve different tasks which you can get while developing.<br/>


## Recommendations:

-You can use material UI-kit to create elements.<br/>

-Project based on styled components, that means if project will raise, developer should split styles from component at the separate file.<br/>

