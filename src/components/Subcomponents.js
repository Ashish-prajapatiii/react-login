import "./componentscss.css";
function Subcomponents(props) {
  let title = "Sum Of Two Numbers";

  return (
    <div className="c1">
      <h1>{title}</h1>
      <h2>this is field a ={props.a}</h2>
      <h2>this is field b={props.b}</h2>
      <h2>answer then = {props.ans}</h2>
    </div>
  );
}
export default Subcomponents;
