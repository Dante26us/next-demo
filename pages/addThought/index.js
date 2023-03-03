import { addthought } from "@/actions/addThoughtAction";
import { loggedOut } from "@/actions/loggedInActions";
import Button from "@/components/Buttons/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddThought() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [thought, setThought] = useState("");
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      addthought(title, thought, (res) => {
        // console.log(res);
        if (res && res.message === "thought inserted") router.replace("/home");
        else {
          router.replace("/");
          dispatch(loggedOut());
        }
      })
    );
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleThought = (e) => {
    setThought(e.target.value);
  };
  return (
    <>
      <div className="new_thought">
        <div>
          <label for="title">Title :</label>
          <input
            name="title"
            className="new_title"
            type="text"
            placeholder="Enter title"
            onChange={handleTitle}
          />
        </div>
        <div>
          <label for="Thought">Thought :</label>
          <textarea
            name="thought"
            className="new_thought"
            type="text"
            placeholder="Enter thought..."
            onChange={handleThought}
          />
        </div>
        <Button
          className="add-button"
          clickHandler={onClick}
          label={"Add thought"}
          position="add-button-position"
        />
      </div>
    </>
  );
}
