import ThoughtBox from "@/components/ThoughtBox";
import LeftSection from "@/containers/HomePage/LeftSection";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function Homepage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectParagraph = (id) => {
    dispatch({ type: "START_LOADING" });
    router.push({
      pathname: "/home/" + id,
    });
  };
  const showThoughts = () => {
    const thoughts = [];
    {
      props.thoughts.map((i) => {
        thoughts.push(
          <ThoughtBox
            title={i.title}
            headline={i.headline}
            id={i.id}
            key={i.id}
            selectParagraph={selectParagraph}
          />
        );
      });
    }
    return thoughts;
  };
  return (
    <>
      <Head>
        <title>Thoughts Page</title>
        <meta name="thought description" content="add unique new thoughts" />
      </Head>
      <div className="home">
        <LeftSection />
        <div>
          <h1>Thoughts</h1>
          <div className="thought-tab">{showThoughts()}</div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const mongo = await MongoClient.connect(
    "mongodb+srv://utkarshshishodiauk:0i0zUH1WDq2KRHin@cluster0.ye4fjov.mongodb.net/userThoughts"
  );
  const db = mongo.db();
  const thoughtCollection = db.collection("thoughts");
  const thoughts = await thoughtCollection.find().toArray();
  // console.log(thoughts);
  mongo.close();
  return {
    props: {
      thoughts: thoughts.map((thought) => ({
        title: thought.title,
        headline: thought.description.split(/\s+/).slice(0, 10).join(" "),
        content: thought.description,
        id: thought._id.toString(),
      })),
    },
    revalidate: 60,
  };
}
