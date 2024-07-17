import "./App.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faHouse} from '@fortawesome/free-solid-svg-icons'
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Watchhistory from "./pages/Watchhistory";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <h1 className='text-center'>Media Player <FontAwesomeIcon icon={faHouse} /></h1> */}
      <Header />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/watchhistory" element={<Watchhistory />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;






