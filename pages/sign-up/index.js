import { signUp } from "@/actions/signUpAction";
import Button from "@/components/Buttons/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const onClick = () => {
    const { userName, firstName, lastName, password } = details;
    dispatch(
      signUp(userName, firstName, lastName, password, (res) => {
        console.log(res);
        if (res) {
          router.push("/");
        }
      })
    );
  };
  const handleUsername = (e) => {
    setDetails({
      ...details,
      userName: e.target.value,
    });
  };
  const handleFirstName = (e) => {
    setDetails({
      ...details,
      firstName: e.target.value,
    });
  };
  const handleLastName = (e) => {
    setDetails({
      ...details,
      lastName: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setDetails({
      ...details,
      password: e.target.value,
    });
  };
  return (
    <>
      <div className="login-screen signUp">
        <div className="login-div">
          <span>User Name</span>
          <span>First Name</span>
          <span>Last Name</span>
          <span>Password</span>
        </div>
        <div className="login-div">
          <input type="text" onChange={handleUsername} />
          <input type="text" onChange={handleFirstName} />
          <input type="text" onChange={handleLastName} />
          <input type="password" onChange={handlePassword} />
        </div>
      </div>
      <Button
        className="login-button signUpButton"
        clickHandler={onClick}
        label={"Sign-Up"}
        position="login-button-position"
      />
    </>
  );
}
