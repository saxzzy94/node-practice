const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = require("../models/User");

passport.serializeUser((newUser, done) => {
	done(null, newUser.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleSecret,
			callbackURL: "/auth/google/callback",
			proxy: true,
		},
		async (accessToken, requestToken, profile, done) => {
			const user = await User.findOne({ googleId: profile.id });
			if (user) {
				return done(null, user);
			}
			const newUser = await new User({ googleId: profile.id }).save();
			done(null, newUser);
		}
	)
);
