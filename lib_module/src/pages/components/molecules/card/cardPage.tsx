import React, { useEffect } from "react";
import "../../../../assets/css/pages/select.css";
import { RESUME_DATA } from "../../../../data/data";


import Prism from "prismjs";
import Navbar from "../../presentation/Navbar";
import Sidebar from "../../presentation/Sidebar";
import Card from "./Card";
const link = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Pokemon-Ash-Feature-Image-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'

export default function CardPage() {
  //Hook useEffect pour exécuter une action après le montage du composant
  useEffect(() => {
    // Appelle Prism.highlightAll() pour appliquer la coloration syntaxique au contenu de la page après le rendu
    Prism.highlightAll();
  }, []); // Le tableau de dépendances vide assure que cette fonction s'exécute seulement une fois après le premier rendu.

  const htmlSnippet = `
    &lt;Card title="Titre de la page" content="Contenu de la page" srcImg={link} bkColor="red"/>
  `;

  // Récupération des données depuis le fichier data
  const props = RESUME_DATA.content.molecules.component3.presentation.props;

  return (
    <div>
      <Navbar />
      <div className="body-input">
        <Sidebar />
        <div className="body-input-presentation">
          <div className="body-input-header">
            <h1>{RESUME_DATA.content.molecules.component3.name}</h1>
            <h3>{RESUME_DATA.content.molecules.component3.description}</h3>
          </div>
          <div className="body-input-text">
            <h2>
              {RESUME_DATA.content.molecules.component3.presentation.title}
            </h2>
            <p>
              {
                RESUME_DATA.content.molecules.component3.presentation
                  .description
              }
            </p>
            <div className="example-component">
              <Card title="Titre de la page" content="Contenu de la page" srcImg={link} bkColor="red"/>
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
                {/* Boucle sur chaque prop du fichier data pour afficher son titre et sa description. */}
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
