import "./App.css";
import DisplayArray from "./Component/DisplayArray/DisplayArray";
import ShowHide from "./Component/ShowHide/ShowHide";
import DataBind from "./Component/DataBind/DataBind";
import DisableButton from "./Component/DisableButton/DisableButton";
import ParentState from "./Component/ParentState/ParentState";
import ParentProps from "./Component/ParentProps/ParentProps";
import SumOf from "./Component/SumOf/SumOf";
import Counter from "./Component/Counter/Counter";

function App() {
  return (
    <>
      <div className="App">
        <ParentProps>
          <DisplayArray />
        </ParentProps>

        <ShowHide />
        <DataBind />
        <DisableButton />
        <ParentState />
        <SumOf />
        <Counter />
      </div>
    </>
  );
}

export default App;
