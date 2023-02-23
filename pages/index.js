import { login } from "@/actions/login";
import Button from "@/components/Buttons/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [details, setDetails] = useState({});
  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("false");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUsername = (e) => {
    setShowError(false);
    setDetails({
      ...details,
      userName: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setShowError(false);
    setDetails({
      ...details,
      password: e.target.value,
    });
  };
  const onClick = () => {
    //login api call
    dispatch(
      login(details.userName, details.password, (res) => {
        console.log(res);
        if (res && res.token) {
          localStorage.setItem("AuthToken", res.token);
          router.push("/home");
        } else {
          setShowErrorMessage(res.message);
          setShowError(true);
        }
      })
    );
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
      {showError && <span>{showErrorMessage}</span>}
      {/* <Link href="/home">Home</Link> */}
    </>
  );
}
