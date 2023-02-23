import { sign, verify } from "jsonwebtoken";
import { MongoClient } from "mongodb";
// import { findOne, findById } from './models/user';

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
  console.log(user);
  // If user is not found, send a 401 response
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Verify password
  console.log(
    user.password,
    password.toString(),
    password.toString() === user.password
  );
  const passwordMatch = password.toString() === user.password;
  console.log(passwordMatch);
  // If password doesn't match, send a 401 response
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token
  const token = sign({ id: user._id.toString() },process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
}

// Middleware for verifying JWT token


// Protected route that requires JWT token
// app.get('/api/home', verifyToken, async (req, res) => {
//   // Find the user in the database using the userId from the JWT token
//   const mongo = await MongoClient.connect(
//     "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userCredential"
//   );
//   const db = mongo.db();
//   const thoughtCollection = db.collection("userData");
//   const user = await thoughtCollection.findById(req.userId);

//   res.json({ message: `Welcome, ${user.username}!` });
// });
