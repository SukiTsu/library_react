import React, { useState } from 'react';

interface AccordionProps {
  sections: { title: string; content: string }[];
  customStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  customStyle,
  buttonStyle,
  contentStyle,
}) => {
  const [openSections, setOpenSections] = useState<boolean[]>(Array(sections.length).fill(false));

  const toggleSection = (index: number) => {
    setOpenSections((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div style={{ ...customStyle }}>
      {sections.map((section, index) => (
        <div key={index} role="region" aria-expanded={openSections[index]} aria-labelledby={`section-title-${index}`}>
          <button
            onClick={() => toggleSection(index)}
            aria-controls={`section-content-${index}`}
            aria-expanded={openSections[index]}
            id={`section-title-${index}`}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'lightgray',
              border: 'none',
              cursor: 'pointer',
              ...buttonStyle,
            }}
          >
            {section.title}
          </button>
          {openSections[index] && (
            <div
              id={`section-content-${index}`}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                backgroundColor: '#f9f9f9',
                ...contentStyle,
              }}
            >
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
