const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/db');

/** Load config */
dotenv.config({ path: './config/config.env' })
/** Passport config */
require('./config/passport')(passport);

connectDB()
const app = express();

/** EJS */
app.use(expressLayouts);
app.set('view engine', 'ejs');

/** Bodyparser */
app.use(express.urlencoded({extended: false}));
app.use(express.json());


/** Logging */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


/** Sessions */
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)
/** Passport middleware */
app.use(passport.initialize());
app.use(passport.session());
/** Connect flash */
app.use(flash());
/** Set global var */
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})
/**  Global Vars */
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

/** to use public assets */
app.use(express.static(path.join(__dirname, 'public')));
/** Routes */

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));
app.use('/weather', require('./routes/weather'));
app.use('/youtube', require('./routes/youtube'));
app.use('/spotify', require('./routes/spotify'));
app.use('/display', require('./routes/display'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));