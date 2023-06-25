# Full-stack application development

## Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Using the HTML, Angular produces the app's user interface; it is easier to interface in the HTML compared to JavaScript, and it is less likely for the code to produce errors and issues, when HTML is used. It is also easier to find HTML developers.
The combination of Angular and HTML makes it easier to write code, in which HTML will be indicating and running and execution of the application by determining each controller and their relationship with each element. This makes the coding process very simple and clear, as in HTML you will get what you see, and Angular will handle what you want (used my own writing from the previous modules submissions)
•	Why did the backend use a NoSQL MongoDB database?
As the used data were unstructured and widely varied for different animals, MongoDB seemed to be a better option compared to the relational or SQL databases. It will also be easy to scale the database horizontally. 

## Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JavaScript and JSON are completely different from each other. JSON or JavaScript Object Notation is lightweight format to store or transfer data and mainly used by JavaScript, while one can use it independently from JavaScript, by different programming languages to read 
(parse) or generate JSON. On the other hand, 
•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
The code from trip card was used in trip listing. It would not be efficient if two separate components render the same data.
In addition to that, hbs handles helped with saving time and code in creating the front-end HTML pages.
Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

To test the authentication and security of the web application is to check all functions including API on the local host and before live deployment.
Postman and Insomnia are two useful tools that can send the correct and purposefully wrong credentials to the server and make sure that authentication works as expected.
Some features such as adding or editing trips should be only accessible by authorized users, while trip lists should be displayed to anyone regardless of being logged in or not.

In the front-end of the full stack application, methos such as GET, POST, PUT, and DELETE are used to send and receive data to implement requests in standard and efficient ways that are followed by many developers all around the world. In the back-end, dtatabse functions such as .findOne, .find, .update are used to retrieve data from database.
Endpoint security is the practice of securing endpoints or entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and campaigns. Endpoint security systems protect these endpoints on a network or in the cloud from cybersecurity threats. Endpoint security has evolved from traditional antivirus software to providing comprehensive protection from sophisticated malware and evolving zero-day threats (trellix.com).


## Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This project helped me to understand the full-stack application development better, and learn more about best practices to select database, front-end and backend development tool.

