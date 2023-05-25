const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
/** Load User Model */ 
const User = require('../models/User');

/** Handle local and google strategy with passport */
module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email' }, (email, password, done) => {
            /** Match User */
            User.findOne({ 'local.email': email })
              .then(user => {
                  if (!user) {
                      return done(null, false, { message: 'That email is not registered' });
                  }

                  /** Match password */
                  bcrypt.compare(password, user.local.password, (err, isMatch) => {
                      if(err) throw err;

                      if(isMatch) {
                          return done(null, user);
                      } else {
                          return done(null, false, {message: 'Password incorrect'});
                      }
                  });
              })
              .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });

    
      passport.use(
        new GoogleStrategy(
          {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
          },
          async (accessToken, refreshToken, profile, done) => {
            const newUser = {
              'Google.googleId': profile.id,
              'Google.displayName': profile.displayName,
              'Google.firstName': profile.name.givenName,
              'Google.lastName': profile.name.familyName,
            }
    
            try {
              let user = await User.findOne({ 'Google.googleId': profile.id })
    
              if (user) {
                done(null, user)
              } else {
                user = await User.create(newUser)
                done(null, user)
              }
            } catch (err) {
              console.error(err)
            }
          }
        )
      )
    
}