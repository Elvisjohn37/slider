import "./App.scss";

import Header from "./components/Header";
import Outputs from "./components/Outputs";
import Inputs from "./components/Inputs";
import ApplyNow from "./components/ApplyNow";
import Details from "./components/Details";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appSliders">
        <div className="inputs">
          <Inputs />
        </div>
        <div className="appOutputs">
          <Outputs />
        </div>
      </div>
      <ApplyNow />
      <Details />
      <Tips />
    </div>
  );
}

export default App;
