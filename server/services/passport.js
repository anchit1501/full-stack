const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken,refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
    .then ((existingUser)=>{
        if(existingUser){
            done(null, existingUser)
        }else{
            new User({googleId: profile.id}).save()
            .then(user=> done(null,user));
        }
    })
    console.log('access token',accessToken);
    console.log('refresh token',refreshToken);
    console.log(profile);

})
);
