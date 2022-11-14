import React, { useState } from "react";
function Subcomponents2(props) {
  const [ans1, setname] = useState(props.ans);
  const [newTitle, settitle] = useState(props.b);
  let title = "Multification Of Two Numbers";

  const handler = (event) => {
    settitle(event.target.value);
  };
 const clickhendler = () => {
    setname(newTitle);
  };
  return (
    <div className="c1">
      <h1>{title}</h1>
      <h2>
        this is field a=
        {props.a}
      </h2>
      <h2>this is field b={props.b}</h2>
      <h2>answer then = {props.ans}</h2>
      <h1>{ans1}</h1>
      <input type="text" value={newTitle} onChange={handler}></input>
      <button onClick={clickhendler}>click</button>
    </div>
  );
}
export default Subcomponents2;
