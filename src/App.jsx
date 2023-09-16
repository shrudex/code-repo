import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Explore from "./assets/components/Explore";
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";

import Sem3 from "./assets/components/sem3/Sem3";
import Sem4 from "./assets/components/sem4/sem4";
import Sem5 from "./assets/components/sem5/sem5";

import DS from "./assets/components/sem3/DS";
import OOPS from "./assets/components/sem3/OOPS";
import IDA from "./assets/components/sem3/IDA";

import DBS from "./assets/components/sem4/DBS";
import ML from "./assets/components/sem4/ML";
import DAA from "./assets/components/sem4/DAA";

import DL from "./assets/components/sem5/DL";
import OS from "./assets/components/sem5/OS";
import WT from "./assets/components/sem5/WT";

import Questions from "./assets/components/Questions";
import Answers from "./assets/components/Answers";

import OopsWeek01 from "./assets/components/sem3/oops/OopsWeek01";
import OopsWeek02 from "./assets/components/sem3/oops/OopsWeek02";
import OopsWeek03 from "./assets/components/sem3/oops/OopsWeek03";
import OopsWeek04 from "./assets/components/sem3/oops/OopsWeek04";
import OopsWeek05 from "./assets/components/sem3/oops/OopsWeek05";
import OopsWeek06 from "./assets/components/sem3/oops/OopsWeek06";
import OopsWeek07 from "./assets/components/sem3/oops/OopsWeek07";
import OopsWeek08 from "./assets/components/sem3/oops/OopsWeek08";
import OopsWeek09 from "./assets/components/sem3/oops/OopsWeek09";
import OopsWeek10 from "./assets/components/sem3/oops/OopsWeek10";
import OopsWeek11 from "./assets/components/sem3/oops/OopsWeek11";

function App() {
  return (
    <div className="App w-full h-auto" style={{ backgroundColor: "#EEEEEE" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />

        <Route path="/sem3" element={<Sem3 />} />
        <Route path="/sem4" element={<Sem4 />} />
        <Route path="/sem5" element={<Sem5 />} />

        <Route path="/ds" element={<DS />} />
        <Route path="/oops" element={<OOPS />} />
        <Route path="/ida" element={<IDA />} />

        <Route path="/dbs" element={<DBS />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/daa" element={<DAA />} />

        <Route path="/dl" element={<DL />} />
        <Route path="/os" element={<OS />} />
        <Route path="/wt" element={<WT />} />

        <Route path="/questions" element={<WT />} />
        <Route path="/answers" element={<WT />} />

        <Route path="/oops/w1" element={<OopsWeek01 />} />
        <Route path="/oops/w2" element={<OopsWeek02 />} />
        <Route path="/oops/w3" element={<OopsWeek03 />} />
        <Route path="/oops/w4" element={<OopsWeek04 />} />
        <Route path="/oops/w5" element={<OopsWeek05 />} />
        <Route path="/oops/w6" element={<OopsWeek06 />} />
        <Route path="/oops/w7" element={<OopsWeek07 />} />
        <Route path="/oops/w8" element={<OopsWeek08 />} />
        <Route path="/oops/w9" element={<OopsWeek09 />} />
        <Route path="/oops/w10" element={<OopsWeek10 />} />
        <Route path="/oops/w11" element={<OopsWeek11 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
