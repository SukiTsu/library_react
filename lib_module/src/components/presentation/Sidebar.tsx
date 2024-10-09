import "../../assets/css/sidebar.css";
import { RESUME_DATA } from "../../data/resume-data";

type Components = Record<string, { name: string }>;
type Category = { name: string; components: Components };

export default function Sidebar() {
  const sidebarData: Record<string, Category[]> = RESUME_DATA.sidebar;

  return (
    <div className="sidebar">
      <h2>Components List</h2>

      {Object.keys(sidebarData).map((sectionKey) => {
        const section = sidebarData[sectionKey as keyof typeof sidebarData];
        return section.map((category) => (
          <div key={category.name} className="components-category">
            <h3>{category.name}</h3>
            <ul>
              {Object.keys(category.components).map((componentKey) => (
                <a href="">
                  <li key={componentKey}>
                    {category.components[componentKey].name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ));
      })}
    </div>
  );
}
