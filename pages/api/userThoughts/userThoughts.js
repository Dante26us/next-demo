// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import verifyToken from "../middleware/middleware";

const handler = async (req, res) => {
  const authenticate = verifyToken(req, res, (res) => {
    return res;
  });
  console.log(authenticate);
  const data = req.body;
  const verify = true;
  if (verify) {
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
    mongo.close();
    res.status(201).json({
      message: "thought inserted",
      result,
    });
  } else {
    res.status(201).json({
      message: "Unauthorized",
    });
  }
};
export default handler;
