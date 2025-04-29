const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;
const { checkConnection } = require("./config/db");
const passport = require("passport");
const { User } = require("./models/UserModel");
const { config } = require("dotenv");
require("./passport/googleStrategy");

config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{secure:true}
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    done(null, user);
  } catch (error) {
    done(error, null); 
  }
});

checkConnection();

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: '/dashboard',
    failureRedirect: "/login",
  })
);

app.get("/login", (req, res) => {
  res.send("Login using google!");
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard - Logged In");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
