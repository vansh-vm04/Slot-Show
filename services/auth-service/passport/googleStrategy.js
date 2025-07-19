const {configDotenv} = require('dotenv');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const { User } = require('../models/UserModel');
const sequelize = require('../config/db');
configDotenv();

const googleStrategy = passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.AUTH_URL}/auth/google/callback`,
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    try {
        // await User.sync({ force: true });
        const user = await User.findOne({where:{id:profile.id}});
        if(!user){
            const role = profile.email===process.env.ADMIN_MAIL ? "admin" : "user";
            const newUser = await User.create({
                id:profile.id,
                name:profile.displayName,
                email:profile.email,
                avatar:profile.picture,
                role:role
            });
            console.log('New User saved to database')
            return done(null,newUser);
        }
        console.log("User already exists")
        return done(null,user);
    } catch (error) {
        console.log(error);
        return done(error,null);
    }
  }
));

module.exports = googleStrategy