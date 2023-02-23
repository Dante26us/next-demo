// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { verify } from "jsonwebtoken";
import { MongoClient } from "mongodb";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Missing auth token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    req.userId = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid auth token" });
  }
};

export default async function handler(req, res) {
  const data = req.body;
  const verify = true;
  // verifyToken(req, res, () => {
  //   return true;
  // });
  if (verify) {
    // console.log( req.headers);
    const { title, description } = data;
    const mongo = await MongoClient.connect(
      "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userThoughts"
    );
    const db = mongo.db();
    const thoughtCollection = db.collection("thoughts");
    const result = await thoughtCollection.insertOne({
      title: title,
      description: description,
      username: "John",
    });
    // console.log(result);
    mongo.close();
    res.status(201).json({
      message: "thought inserted",
    });
  } else {
    res.status(201).json({
      message: "Unauthorized",
    });
  }
}
