
import LandingLoading from "./component/LandingLoading";
import Navbar from "./component/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StepperForm from "./component/StepperForm";
function App() {

  return (
    <BrowserRouter>
      <nav>
        <Navbar/>

        <Routes>
        
    <Route path="/" element={<LandingLoading/>} />
    <Route path="/register" element={<StepperForm/>} />
        </Routes>
      </nav>

    </BrowserRouter>
  );
}

export default App;
