const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
});

module.exports = User = mongoose.model("users", userSchema);
