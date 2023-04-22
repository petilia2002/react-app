import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main";
//import Ad from "./components/Ad/Ad";
import Ads from "./pages/Ads";
//import Bid from "./components/Bid/Bid";

/*<Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
  </Routes>*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </>
  );
}

export default App;
