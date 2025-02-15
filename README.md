# Unhandled Empty JSON POST Request in Express.js

This repository demonstrates a common error in Express.js applications: failure to handle empty or malformed JSON payloads in POST requests.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with robust error handling.

## Bug Description

The server does not check if the request body (`req.body`) is empty or if the JSON is malformed before processing it. This can lead to unexpected behavior, crashes, or vulnerabilities.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express`
4. Run `node bug.js`
5. Send an empty POST request to `http://localhost:3000/users` using a tool like curl or Postman.
6. Observe the lack of error handling and potential crashes.

## Solution

The `bugSolution.js` file demonstrates the proper way to handle this situation. It includes validation checks before processing the request body. 