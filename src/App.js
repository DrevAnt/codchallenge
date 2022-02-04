import "./App.css";
import DisplayArray from "./Component/DisplayArray/DisplayArray";
import ShowHide from "./Component/ShowHide/ShowHide";
import DataBind from "./Component/DataBind/DataBind";
import DisableButton from "./Component/DisableButton/DisableButton";

function App() {
  return (
    <div className="App">
      <DisplayArray />
      <ShowHide />
      <DataBind />
      <DisableButton />
    </div>
  );
}

export default App;
