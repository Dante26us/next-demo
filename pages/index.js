import { loggedIn } from "@/actions/loggedInActions";
import { login } from "@/actions/login";
import Button from "@/components/Buttons/Button";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [details, setDetails] = useState({});
  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("false");
  const loginVerify = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUsername = (e) => {
    setShowError(false);
    setDetails({
      ...details,
      userName: e.target.value,
    });
  };
  useEffect(() => {
    if (loginVerify && loginVerify.isLoggedIn && router.pathname === "/") {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [loginVerify, router]);
  const handlePassword = (e) => {
    setShowError(false);
    setDetails({
      ...details,
      password: e.target.value,
    });
  };
  const onClick = () => {
    //login api call
    dispatch({ type: "START_LOADING" });
    dispatch(
      login(details.userName, details.password, (res) => {
        // console.log(res);
        if (res && res.token) {
          localStorage.setItem("AuthToken", res.token);
          {
            type: "STOP_LOADING";
          }
          dispatch(loggedIn());
          router.push("/home");
        } else {
          setShowErrorMessage(res.message);
          setShowError(true);
        }
      })
    );
  };
  const SignUphandler = () => {
    router.replace("/sign-up");
  };
  return (
    <>
      <div className="login-page">
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
        <span className="sing-up" onClick={SignUphandler}>
          Sign Up
        </span>
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
