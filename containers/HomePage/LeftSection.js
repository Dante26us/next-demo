import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import avatar from "../../public/Assets/1.jpg";
export default function LeftSection() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState("");
  useEffect(() => {
    setProfileImage(avatar);
  }, []);
  const addthoughtHandler = () => {
    router.push({
      pathname: "/addThought",
    });
  };
  return (
    <>
      <div className="left-home">
        <div>
          <Image src={avatar} alt="avatar" />
        </div>
        <div className="add-new-button" onClick={addthoughtHandler}>
          Add new thought
        </div>
      </div>
    </>
  );
}
