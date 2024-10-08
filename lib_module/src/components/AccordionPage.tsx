import React from 'react';
import Accordion from './organismes/Accordeon';

const AccordionPage: React.FC = () => {
  const sections = [
    { title: 'Section 1', content: 'Contenu de la section 1' },
    { title: 'Section 2', content: 'Contenu de la section 2' },
    { title: 'Section 3', content: 'Contenu de la section 3' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Mon Accordéon</h1>
      <Accordion
        sections={sections}
        customStyle={{ border: '2px solid #333', borderRadius: '5px' }}
        buttonStyle={{
          backgroundColor: '#007BFF',
          color: '#FFF',
          borderRadius: '4px',
          fontSize: '1rem',
        }}
        contentStyle={{
          backgroundColor: '#e9ecef',
          color: '#343a40',
          border: '1px solid #ced4da',
        }}
      />
    </div>
  );
};

export default AccordionPage;
