import { sign } from "jsonwebtoken";
import { MongoClient } from "mongodb";
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const { username, password } = req.body;
  // console.log(username, password);
  const mongo = await MongoClient.connect(
    "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userCredential"
  );
  const db = mongo.db();
  const users = db.collection("userData");
  // Find the user in the database
  const user = await users.findOne({ username: username.toString() });
  // console.log(user);
  // If user is not found, send a 401 response
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Verify password
  const passwordMatch = await bcrypt.compare(password, user.password);
  // console.log(passwordMatch);
  // If password doesn't match, send a 401 response
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token
  const token = sign({ user_id: user._id, username }, process.env.JWT_SECRET, {
    expiresIn: "120",
  });
  user.token = token;
  res.json(user);
}