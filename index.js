const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./services/passport");
const keys = require("./config/keys");

mongoose
	.connect(keys.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("mongoDB connected");
	})
	.catch(err => console.log(err));

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
	res.send({ hi: "we made changes" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`app started on port:${PORT}`);
});
