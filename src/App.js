import Subcomponents from "./components/Subcomponents";
import Subcomponents2 from "./components/Subcomponets2";
import NewComponent from "./loginform/login";
import "./a1.css";
function App() {
  let a = 10;
  let b = 10;
  let ans = a + b;
  let ansa = a * b;
  return (
    <div className="abc">
      <div className="home">
        <NewComponent />
      </div>
      {/* <div className="demo">
        <Subcomponents a={a} b={b} ans={ans}></Subcomponents>
      </div>
      <div className="demo2">
        <Subcomponents2 a={a} b={b} ans={ansa}></Subcomponents2>
      </div> */}
    </div>
  );
}
export default App;
