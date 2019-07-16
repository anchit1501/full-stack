const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
        accessType: 'offline',
        prompt: 'consent',
        session: false,
    }));


    app.get('/auth/google/callback', passport.authenticate('google'))
}