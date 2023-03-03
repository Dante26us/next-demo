import { sign, verify } from "jsonwebtoken";
import { MongoClient } from "mongodb";
const bcrypt = require("bcrypt");
export default async function handler(req, res) {
  const { username, firstName, lastName, password } = req.body;
  if (!(username && password && firstName && lastName)) {
    res.status(400).send("All input is required");
  }
  const mongo = await MongoClient.connect(
    "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userCredential"
  );
  const db = mongo.db();
  const users = db.collection("userData");
  // Find the user in the database
  const oldUser = await users.findOne({ username: username.toString() });
  // If user is not found, send a 401 response
  if (oldUser) {
    return res.status(201).send("User Already Exist. Please Login");
  }
  const encryptedPassword = await bcrypt.hash(password, 10);
  // Verify password
  const user = await users.insertOne({
    firstName,
    lastName,
    username: username.toLowerCase(), // sanitize: convert email to lowercase
    password: encryptedPassword,
  });
  const token = sign({ user_id: user._id, username }, process.env.JWT_SECRET, {
    expiresIn: "120",
  });
  // save user token
  user.token = token;

  // return new user
  res.status(201).json(user);
}
