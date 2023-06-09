const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

/** User model */
const User = require('../models/User');

/** get the login page */
router.get('/login', (req, res) => res.render('login'));

/**  get the register page  */
router.get('/register', (req, res) => res.render('register'));

/** Handle the register action */
router.post('/register', (req, res) => {
    const {name, email, password, password2 } = req.body;
    let errors = [];

    /** Check required fields */
    if(!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields' });
    }

    /** Check if passwords match */
    if (password !== password2) {
        errors.push({msg: 'Passwords do not match'});
    }

    /** Check password length */
    if (password.length < 6) {
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        /** Validation passed */
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    /** user exists */
                    errors.push({ msg: 'Email is already registered'});
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User()
                    newUser.local.email = email
                    newUser.local.name = name
                    newUser.local.password = password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.local.password, salt, (err, hash) => {
                            newUser.local.password = hash
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered ! You can log in !')
                                    res.redirect('/users/login')
                                })
                                .catch(err => console.log(err))
                    }))

                    // const newUser = new User({
                    //     name: name,
                    //     email,
                    //     password
                    // });

                    // // Hash Password
                    // bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //     if (err) throw err;
                    //     // Set password to hashed
                    //     newUser.password = hash;
                    //     // Save User
                    //     newUser.save()
                    //         .then(user => {
                    //             req.flash('success_msg', 'You are now registered and can log in');
                    //             res.redirect('/users/login');
                    //         })
                    //         .catch(err => console.log(err));
                    // }))
                }
            });
    }
});

/** Login Handle */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

/** Logout Handle */
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/users/login');
});

module.exports = router;