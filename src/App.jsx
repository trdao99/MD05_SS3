import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStage from "./components/UseStage";
import CheckbookList from "./components/CheckbookList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseStage /> */}
      <CheckbookList />
    </>
  );
}

export default App;
