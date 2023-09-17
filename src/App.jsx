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

import DaaWeek01 from "./assets/components/sem4/daa/DaaWeek01";
import DaaWeek02 from "./assets/components/sem4/daa/DaaWeek02";
import DaaWeek03 from "./assets/components/sem4/daa/DaaWeek03";
import DaaWeek04 from "./assets/components/sem4/daa/DaaWeek04";
import DaaWeek05 from "./assets/components/sem4/daa/DaaWeek05";
import DaaWeek06 from "./assets/components/sem4/daa/DaaWeek06";
import DaaWeek07 from "./assets/components/sem4/daa/DaaWeek07";
import DaaWeek08 from "./assets/components/sem4/daa/DaaWeek08";
import DaaWeek09 from "./assets/components/sem4/daa/DaaWeek09";
import DaaWeek10 from "./assets/components/sem4/daa/DaaWeek10";
import DaaWeek11 from "./assets/components/sem4/daa/DaaWeek11";

import DsWeek01 from "./assets/components/sem3/ds/DsWeek01";
import DsWeek02 from "./assets/components/sem3/ds/DsWeek02";
import DsWeek03 from "./assets/components/sem3/ds/DsWeek03";
import DsWeek04 from "./assets/components/sem3/ds/DsWeek04";
import DsWeek05 from "./assets/components/sem3/ds/DsWeek05";
import DsWeek06 from "./assets/components/sem3/ds/DsWeek06";
import DsWeek07 from "./assets/components/sem3/ds/DsWeek07";
import DsWeek08 from "./assets/components/sem3/ds/DsWeek08";
import DsWeek09 from "./assets/components/sem3/ds/DsWeek09";
import DsWeek10 from "./assets/components/sem3/ds/DsWeek10";
import DsWeek11 from "./assets/components/sem3/ds/DsWeek11";

import DbsWeek01 from "./assets/components/sem4/dbs/DbsWeek01";
import DbsWeek02 from "./assets/components/sem4/dbs/DbsWeek02";
import DbsWeek03 from "./assets/components/sem4/dbs/DbsWeek03";
import DbsWeek04 from "./assets/components/sem4/dbs/DbsWeek04";
import DbsWeek05 from "./assets/components/sem4/dbs/DbsWeek05";
import DbsWeek06 from "./assets/components/sem4/dbs/DbsWeek06";
import DbsWeek07 from "./assets/components/sem4/dbs/DbsWeek07";
import DbsWeek08 from "./assets/components/sem4/dbs/DbsWeek08";
import DbsWeek09 from "./assets/components/sem4/dbs/DbsWeek09";
import DbsWeek10 from "./assets/components/sem4/dbs/DbsWeek10";
import DbsWeek11 from "./assets/components/sem4/dbs/DbsWeek11";

import IdaWeek02 from "./assets/components/sem3/ida/IdaWeek02";
import IdaWeek01 from "./assets/components/sem3/ida/IdaWeek01";
import IdaWeek03 from "./assets/components/sem3/ida/IdaWeek03";
import IdaWeek04 from "./assets/components/sem3/ida/IdaWeek04";
import IdaWeek05 from "./assets/components/sem3/ida/IdaWeek05";
import IdaWeek06 from "./assets/components/sem3/ida/IdaWeek06";
import IdaWeek07 from "./assets/components/sem3/ida/IdaWeek07";
import IdaWeek08 from "./assets/components/sem3/ida/IdaWeek08";
import IdaWeek09 from "./assets/components/sem3/ida/IdaWeek09";
import IdaWeek10 from "./assets/components/sem3/ida/IdaWeek10";
import IdaWeek11 from "./assets/components/sem3/ida/IdaWeek11";

function App() {
  return (
    <div
      className="App w-full h-auto !overflow-hidden"
      style={{ backgroundColor: "#EEEEEE" }}
    >
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

        <Route path="/questions" element={<Questions />} />
        <Route path="/answers" element={<Answers />} />

        <Route path="/ds/w1" element={<DsWeek01 />} />
        <Route path="/ds/w2" element={<DsWeek02 />} />
        <Route path="/ds/w3" element={<DsWeek03 />} />
        <Route path="/ds/w4" element={<DsWeek04 />} />
        <Route path="/ds/w5" element={<DsWeek05 />} />
        <Route path="/ds/w6" element={<DsWeek06 />} />
        <Route path="/ds/w7" element={<DsWeek07 />} />
        <Route path="/ds/w8" element={<DsWeek08 />} />
        <Route path="/ds/w9" element={<DsWeek09 />} />
        <Route path="/ds/w10" element={<DsWeek10 />} />
        <Route path="/ds/w11" element={<DsWeek11 />} />

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

        <Route path="/ida/w1" element={<IdaWeek01 />} />
        <Route path="/ida/w2" element={<IdaWeek02 />} />
        <Route path="/ida/w3" element={<IdaWeek03 />} />
        <Route path="/ida/w4" element={<IdaWeek04 />} />
        <Route path="/ida/w5" element={<IdaWeek05 />} />
        <Route path="/ida/w6" element={<IdaWeek06 />} />
        <Route path="/ida/w7" element={<IdaWeek07 />} />
        <Route path="/ida/w8" element={<IdaWeek08 />} />
        <Route path="/ida/w9" element={<IdaWeek09 />} />
        <Route path="/ida/w10" element={<IdaWeek10 />} />
        <Route path="/ida/w11" element={<IdaWeek11 />} />

        <Route path="/daa/w1" element={<DaaWeek01 />} />
        <Route path="/daa/w2" element={<DaaWeek02 />} />
        <Route path="/daa/w3" element={<DaaWeek03 />} />
        <Route path="/daa/w4" element={<DaaWeek04 />} />
        <Route path="/daa/w5" element={<DaaWeek05 />} />
        <Route path="/daa/w6" element={<DaaWeek06 />} />
        <Route path="/daa/w7" element={<DaaWeek07 />} />
        <Route path="/daa/w8" element={<DaaWeek08 />} />
        <Route path="/daa/w9" element={<DaaWeek09 />} />
        <Route path="/daa/w10" element={<DaaWeek10 />} />
        <Route path="/daa/w11" element={<DaaWeek11 />} />

        <Route path="/dbs/w1" element={<DbsWeek01 />} />
        <Route path="/dbs/w2" element={<DbsWeek02 />} />
        <Route path="/dbs/w3" element={<DbsWeek03 />} />
        <Route path="/dbs/w4" element={<DbsWeek04 />} />
        <Route path="/dbs/w5" element={<DbsWeek05 />} />
        <Route path="/dbs/w6" element={<DbsWeek06 />} />
        <Route path="/dbs/w7" element={<DbsWeek07 />} />
        <Route path="/dbs/w8" element={<DbsWeek08 />} />
        <Route path="/dbs/w9" element={<DbsWeek09 />} />
        <Route path="/dbs/w10" element={<DbsWeek10 />} />
        <Route path="/dbs/w11" element={<DbsWeek11 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
