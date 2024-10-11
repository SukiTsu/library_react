import React, { useEffect } from "react";
import "../../../../assets/css/pages/select.css";
import { RESUME_DATA } from "../../../../data/data";


import Prism from "prismjs";
import Loader from "./Loader";
import Navbar from "../../presentation/Navbar";
import Sidebar from "../../presentation/Sidebar";

export default function LoaderPage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const htmlSnippet = `
    &lt;Loader type={progress}/>
  `;

  const props = RESUME_DATA.content.atoms.component7.presentation.props;

  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.atoms.component7.name}</h1>
            <h3>{RESUME_DATA.content.atoms.component7.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>{RESUME_DATA.content.atoms.component7.presentation.title}</h2>
            <p>
              {RESUME_DATA.content.atoms.component7.presentation.description}
            </p>
            <div className="example-component">
            <Loader type={"spinner"}/>
            </div>
            <pre>
              <code
                className="language-html line-numbers"
                data-prismjs-copy="Copy the HTML snippet!"
                dangerouslySetInnerHTML={{ __html: htmlSnippet }}
              ></code>
            </pre>
            <div className="description-componant">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              <ul className="props-list">
                {Object.entries(props).map(([key, propData]) => {
                  if (typeof propData === "object") {
                    return (
                      <li key={key}>
                        <h3>{propData.title}</h3>
                        <p>{propData.description}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
