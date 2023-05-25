const express = require('express')
const passport = require('passport')
const router = express.Router()

/** authentification with google
// @desc    Auth with Google
// @route   GET /auth/google
*/
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

/** get the Google auth callback
// @desc    Google auth callback
// @route   GET /auth/google/callback
*/
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/users/login' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

// // @desc    Logout user
// // @route   /auth/logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/users/login');
// })

module.exports = router