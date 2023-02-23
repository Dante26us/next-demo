import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import { useDispatch } from "react-redux";

export default function Thoughtid(props) {
  console.log(props);
  const dispatch = useDispatch();
  dispatch({ type: "STOP_LOADING" });
  return (
    <div className="home2">
      <h2>{props.title}</h2>
      <span>{props.content}</span>
    </div>
  );
}
export async function getStaticPaths() {
  const mongo = await MongoClient.connect(
    "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userThoughts"
  );
  const db = mongo.db();
  const thoughtCollection = db.collection("thoughts");
  const thoughts = await thoughtCollection.find({}, { _id: 1 }).toArray();

  mongo.close();
  return {
    fallback: true,
    paths: thoughts.map((thought) => ({
      params: { thoughtId: thought._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const thoughtid = context.params.thoughtId;
  const mongo = await MongoClient.connect(
    "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userThoughts"
  );
  const db = mongo.db();
  const thoughtCollection = db.collection("thoughts");
  const thought = await thoughtCollection.findOne({
    _id: new ObjectId(thoughtid),
  });

  mongo.close();
  return {
    props: {
      id: thought._id.toString(),
      title: thought.title,
      content: thought.description,
    },
    revalidate: 60,
  };
}
