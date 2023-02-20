import Button from "@/components/Buttons/Button";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [details, setDetails] = useState({});
  const handleUsername = (e) => {
    setDetails({
      ...details,
      userName: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setDetails({
      ...details,
      password: e.target.value,
    });
  };
  const onClick = () => {
    //login api call
  };
  return (
    <>
      <div className="login-screen">
        <div className="login-div">
          <span>User Name</span>
          <span>Password</span>
        </div>
        <div className="login-div">
          <input type="text" onChange={handleUsername} />
          <input type="password" onChange={handlePassword} />
        </div>
      </div>
      <Button
        className="login-button"
        clickHandler={onClick}
        label={"Login"}
        position="login-button-position"
      />
      <Link href="/home">Home</Link>
    </>
  );
}
