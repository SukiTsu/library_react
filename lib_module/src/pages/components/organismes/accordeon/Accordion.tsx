import React, { useState } from 'react';
import '../../../../assets/Accordion.css';

export interface Section {
  title: string;
  content: string;
}

export interface AccordionProps {
  allowMultipleOpen?: boolean;
  customStyles?: {
    headerColor?: string; 
    contentColor?: string;
    borderColor?: string; 
    width?: string; 
    borderRadius?: string; 
    backgroundColor?: string;
    alignment?: 'left' | 'center' | 'right';
    displayMode?: 'column' | 'row';
  };
}

const sections: Section[] = [
  { title: 'Section 1', content: 'Contenu de la section 1' },
  { title: 'Section 2', content: 'Contenu de la section 2' },
  { title: 'Section 3', content: 'Contenu de la section 3' },
];

const AccordionSection: React.FC<{
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  headerColor?: string;
  contentColor?: string;
}> = ({ title, content, isOpen, onToggle, headerColor, contentColor }) => {
  return (
    <div className="accordion-section">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={title}
        className="accordion-header"
        style={{ backgroundColor: headerColor }}
      >
        {title}
      </button>
      {isOpen && (
        <div 
          id={title} 
          className={`accordion-content ${isOpen ? 'open' : ''}`}
          style={{ backgroundColor: contentColor }}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  allowMultipleOpen = false,
  customStyles = {},
}) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (allowMultipleOpen) {
      setOpenSections((prev) => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenSections(prev => (prev.includes(index) ? [] : [index]));
    }
  };

  const {
    headerColor,
    contentColor,
    borderColor,
    width,
    borderRadius,
    backgroundColor,
    alignment,
    displayMode = 'column',
  } = customStyles;

  return (
    <div
      className="accordion"
      style={{
        borderColor,
        width,
        borderRadius,
        backgroundColor,
        textAlign: alignment,
        display: displayMode === 'column' ? 'block' : 'flex',
      }}
    >
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openSections.includes(index)}
          onToggle={() => toggleSection(index)}
          headerColor={headerColor}
          contentColor={contentColor}
        />
      ))}
    </div>
  );
};

export default Accordion;
