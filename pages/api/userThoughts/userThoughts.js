// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  const data = req.body;
  console.log(data);
  debugger
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
  console.log(result);
  mongo.close();
  res.status(201).json({
    message: "thought inserted",
  });
}
