import "../../../../assets/css/pages/input.css";
import { RESUME_DATA } from "../../../../data/resume-data";

import Navbar from "../../../../components/presentation/Navbar";
import Sidebar from "../../../../components/presentation/Sidebar";

export default function Input() {
  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div>
          <h1>{RESUME_DATA.content.atoms.component1.name}</h1>
        </div>
      </div>
    </div>
  );
}
