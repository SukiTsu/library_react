import "../../../../assets/css/pages/input.css";
import { RESUME_DATA } from "../../../../data/data";

import Navbar from "../../../../components/presentation/Navbar";
import Sidebar from "../../../../components/presentation/Sidebar";

export default function Input() {
  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.atoms.component1.name}</h1>
            <h3>{RESUME_DATA.content.atoms.component1.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>{RESUME_DATA.content.atoms.component1.presentation.title}</h2>
            <div className="example-component"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
