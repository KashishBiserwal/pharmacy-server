const User = require("../models/User");

const bcrypt = require("bcrypt");

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).send({ message: "User does not exist" });
        }
        const valid = await bcrypt.compare(password, existingUser.password);
        if (!valid) {
            return res.status(400).send({ message: "Invalid password" });
        }
        res.status(200).send({ message: "Login successful", user: existingUser });
    } catch (error) {
        res.status(500).send({ message: "Error logging in" });
    }
}

module.exports = {Login}