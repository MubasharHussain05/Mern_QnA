// What are some common security best
// practices when using Express.js?

//When using Express.js, security is a critical consideration to protect your application and its users. 
// Some common security best practices when using Express.js include:

// 1 Use Helmet for Secure HTTP Headers

// Helmet is a middleware that helps secure Express.js apps by setting various HTTP headers.

// To use Helmet, install it via npm:
const helmet = require('helmet');
app.use(helmet());


//2. Enable HTTPS

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });


  //3. Sanitize User Input
//   Prevent injection attacks (e.g., SQL injection, NoSQL injection, XSS) by sanitizing user inputs.
// Use libraries like express-validator for input validation and sanitization.


const { body, validationResult } = require('express-validator');

app.post('/submit', [
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Validated!');
});


// 4. Use Secure Cookie Settings
// Use httpOnly and secure flags for cookies.
// Example:

app.use(require('cookie-parser')());
app.use((req, res, next) => {
  res.cookie('session', 'secureValue', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  next();
});


// 5. Prevent Cross-Site Request Forgery (CSRF)
// Use CSRF tokens to protect against cross-site request forgery.

const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.send(`<form action="/submit" method="POST">
              <input type="hidden" name="_csrf" value="${req.csrfToken()}">
              <button type="submit">Submit</button>
            </form>`);
});
 


