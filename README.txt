MAILSPACE — Email and Password Regex Login Demo
================================================

Files:
- index.html : Login page structure and responsive styling
- script.js  : JavaScript regex validation and DOM event handling

How to run:
1. Keep index.html and script.js in the same folder.
2. Open index.html in Chrome, Edge, Firefox, or another modern browser.
3. Test the form with invalid email, invalid password, and valid-format values.

Behavior requested in the whiteboard image:
1) Invalid Email
2) Invalid Pass
3) Valid Data

Validation rules:
- Email: common format using local-part@domain.suffix. It checks format only.
- Password: 8–12 characters, at least one lowercase letter, uppercase letter,
  digit, and one allowed special character from @ # - $ ^.
- Password characters are limited to letters, digits, and those allowed symbols.

Sample values:
- Valid email: learner@example.com
- Valid password: Zoro@123

Study concepts from Day 3:
- const variables
- String trim()
- Regular expressions and .test()
- if / else if / else
- Boolean values
- DOM selectors and textContent
- addEventListener() and form submit events
- input type toggling

Important:
This is a front-end learning demo only. It does not authenticate a real user, send
credentials to a server, or store account details. A real login requires secure
server-side authentication, HTTPS, rate limiting, and password hashing.
