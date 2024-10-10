import "../../../../assets/css/pages/select.css";
import { RESUME_DATA } from "../../../../data/data";

import Navbar from "../../../../components/presentation/Navbar";
import Sidebar from "../../../../components/presentation/Sidebar";
import Prism from "prismjs";
import { useEffect } from "react";

export default function ButtonPage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const htmlSnippet = `
    &lt;div className="body-input-header"&gt;<br/>
    &nbsp;&nbsp;&lt;h1&gt;&#123;RESUME_DATA.content.atoms.component1.name&#125;&lt;/h1&gt;<br/>
    &nbsp;&nbsp;&lt;h3&gt;&#123;RESUME_DATA.content.atoms.component1.description&#125;&lt;/h3&gt;<br/>
    &lt;/div&gt;
  `;

  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.atoms.component6.name}</h1>
            <h3>{RESUME_DATA.content.atoms.component6.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>{RESUME_DATA.content.atoms.component6.presentation.title}</h2>
            <div className="example-component"></div>
            <pre>
              <code
                className="language-html line-numbers"
                data-prismjs-copy="Copy the HTML snippet!"
                dangerouslySetInnerHTML={{ __html: htmlSnippet }}
              ></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
