import "../../../../assets/css/pages/select.css";
import { RESUME_DATA } from "../../../../data/data";

import Navbar from "../../../../components/presentation/Navbar";
import Sidebar from "../../../../components/presentation/Sidebar";
import Prism from "prismjs";
import { useEffect } from "react";

export default function BreadcrumbPage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const htmlSnippet = `
    &lt;div className="body-input-header"&gt;<br/>
    &nbsp;&nbsp;&lt;h1&gt;&#123;RESUME_DATA.content.atoms.component1.name&#125;&lt;/h1&gt;<br/>
    &nbsp;&nbsp;&lt;h3&gt;&#123;RESUME_DATA.content.atoms.component1.description&#125;&lt;/h3&gt;<br/>
    &lt;/div&gt;
  `;

  const props = RESUME_DATA.content.atoms.component1.presentation.props;

  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.molecules.component2.name}</h1>
            <h3>{RESUME_DATA.content.molecules.component2.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>
              {RESUME_DATA.content.molecules.component2.presentation.title}
            </h2>
            <div className="example-component"></div>
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
