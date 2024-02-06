a. **Brief Description of the Project:**
   This project is a web application that calculates the factorial of a number provided by the user. It utilizes Web Workers for heavy data processing to offload the computation from the main thread.
b. **Instructions to Run the Project Locally:**
   1. Create a new directory for your project.
   2. Inside the directory, create two files: `index.html` and `factorialWorker.js`.
   3. Copy the HTML code provided above into the `index.html` file.
   4. Copy the JavaScript code provided above into the `factorialWorker.js` file.
   5. Open the `index.html` file in a web browser.
   6. Enter a number into the input field and click the "Calculate Factorial" button to see the factorial calculation results.

c. **Summary of Findings Regarding Performance Improvements with Web Workers:**
   Utilizing Web Workers for heavy data processing tasks, such as calculating factorials, can significantly improve the performance of web applications. By offloading the computation to separate threads, Web Workers prevent the main thread from being blocked, thus enhancing the responsiveness of the application. In this project, we observed that using Web Workers reduced the time taken for factorial calculation compared to performing the calculation in the main thread.

d. **Challenges Faced and How They Were Overcome:**
   One challenge faced during this project was ensuring effective communication between the main thread and the Web Worker to exchange data and receive calculation results. This was overcome by utilizing the `postMessage()` method to send data from the main thread to the Web Worker and the `onmessage` event handler to receive messages from the Web Worker. Additionally, proper error handling was implemented to handle invalid input and other potential issues.

e. **References or Resources Used:**
   - Mozilla Developer Network (MDN) Web Docs: https://developer.mozilla.org/
   - W3Schools: https://www.w3schools.com/
   - JavaScript Web Workers documentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
