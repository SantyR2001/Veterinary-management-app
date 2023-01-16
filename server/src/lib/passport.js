import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import connection from "../connectDB";
import * as helpers from "./helpers";

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "user",
      passwordField: "pass",
      passReqToCallback: true,
    },
    async (req, user, pass, done) => {
      const [rows] = await connection.query(
        "SELECT * FROM Users WHERE user = ?",
        [user]
      );
      if (rows.length > 0) {
        const userCheck = rows[0];
        const validPassword = await helpers.matchPassword(pass, userCheck.pass);
        if (validPassword) {
          done(
            null,
            userCheck,
            req.flash("success", "Welcome " + userCheck.username)
          );
        } else {
          done(null, false, req.flash("message", "Incorrect Password"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "The Username does not exists.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "user",
      passwordField: "pass",
      passReqToCallback: true,
    },
    async (req, user, pass, done) => {
      const { email, name } = req.body;

      let newUser = {
        name,
        email,
        user,
        pass,
      };

      newUser.pass = await helpers.encryptPassword(pass);

      // Saving in the Database
      try {
        const result = await connection.query(
          "INSERT INTO users SET ? ",
          newUser
        );
        console.log(result);
      } catch (error) {
        console.error(error);
      }

      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const [rows] = await connection.query("SELECT * FROM users WHERE id = ?", [
    id,
  ]);
  done(null, rows[0]);
});
