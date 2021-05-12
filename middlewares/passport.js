const User = require("../models/users");
const { SECRET } = require("../config");
const { Strategy, ExtractJwt } = require("passport-jwt");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
};

module.exports = (passport) => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            await User.findById(payload.userID)
                .then(user => {
                    if (!user) {
                        return done(null, false);
                    }
                    return done(null, user);
                }).catch(err => {
                    return done(null, false);
                });
        })
    );
};