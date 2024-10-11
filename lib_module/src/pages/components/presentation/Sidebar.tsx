import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/sidebar.css";
import { RESUME_DATA } from "../../../data/data";

//Définition du type Components
type Components = Record<string, { name: string; path: string }>;
//Définition du type Category
type Category = { name: string; components: Components };

export default function Sidebar() {
  // Récupération des données pour la sidebar à partir de RESUME_DATA
  // Les données sont organisées par sections et catégories
  const sidebarData: Record<string, Category[]> = RESUME_DATA.sidebar;

  return (
    <div className="sidebar">
      <h2>Components List</h2>

      {/* Boucle sur chaque section des données de la sidebar */}
      {Object.keys(sidebarData).map((sectionKey) => {
        const section = sidebarData[sectionKey as keyof typeof sidebarData];
        // Boucle sur chaque catégorie pour les afficher
        return section.map((category) => (
          <div key={category.name} className="components-category">
            <h3>{category.name}</h3>
            <ul>
              {Object.keys(category.components).map((componentKey) => (
                <li key={componentKey}>
                  <Link
                    to={category.components[componentKey].path}
                    className="components-link"
                  >
                    {category.components[componentKey].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ));
      })}
    </div>
  );
}
