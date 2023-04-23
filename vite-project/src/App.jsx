import { Routes, Route } from "react-router-dom";
import { Main, Login, Registration, Ads, Requests } from "./pages";

/*<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
}

export default App;
