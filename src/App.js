import HomePage from "./Pages/Home/HomePage";
import Inhale from "./Pages/Inhale/Inhale";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>

        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/try' element = {<Inhale/>}/>
      </Routes>
    </>
  );
}

export default App;
