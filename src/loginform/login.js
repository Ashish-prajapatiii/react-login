import React, { useState } from "react";
import "./login.css";
function NewComponent() {
  const [sname, usenme] = useState("");
  const [spassword, uepasswoord] = useState("");

  const titleusenme = (event) => {
    usenme(event.target.value);
  };

  const titlepass = (event) => {
    uepasswoord(event.target.value);
  };
  const clickhendler = (e) => {
    e.preventDefault();

    const data = {
      name: sname,
      password: spassword,
    };
    console.log(data);
    usenme("");
    uepasswoord("");
  };

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <form onSubmit={clickhendler}>
          <p>Welcome</p>
          <input
            type="email"
            placeholder="Email"
            value={sname}
            onChange={titleusenme}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={spassword}
            onChange={titlepass}
          />
          <br />
          <input type="submit" defaultValue="Sign in" onSubmit={clickhendler} />
          <br />
          <a href="#">Forgot Password?</a>
        </form>
        <div className="drops">
          <div className="drop drop-1" />
          <div className="drop drop-2" />
          <div className="drop drop-3" />
          <div className="drop drop-4" />
          <div className="drop drop-5" />
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
