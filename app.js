const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const mongoose = require('mongoose');
const passport = require('./auth/passport');
const session = require('express-session');
const methodOverride = require('method-override');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const profileRouter = require('./routes/profile');
const postsRouter = require('./routes/posts');

app.use(session({
    secret: 'sssddssdcdsdssda',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method'))
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.use('/profile', profileRouter);
app.use('/posts', postsRouter);


mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch((err) => {
        console.log("Failed to Connect DB");
    })
