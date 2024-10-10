export interface InputProps {
    type: string;
    label?: string; 
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    readOnly?: boolean;
    customStyles?: {
      borderColor?: string;
      backgroundColor?: string;
      textColor?: string;
      width?: string;
      labelColor?: string;
      borderRadius?: string; 
      textAlign?: 'left' | 'center' | 'right';
  
    };
  }
const commonStyles = {
  borderColor: '#0080ff',
  backgroundColor: '#ffffff',
  textColor: 'grey',
  width: '100%',
  labelColor: 'grey',
  borderRadius: '5px',
  textAlign: 'left',
};

const buttonConfig = {
  backgroundColor: 'green',
  textColor: 'black',
  size: 'medium',
};

const inputConfig: InputProps[] = [
  {
    type: 'text',
    label: 'Nom', 
    placeholder: 'Entrez votre nom',
    required: true,
    minLength: 2,
    maxLength: 30,
    disabled: false,
    readOnly: false,
    customStyles: commonStyles,
  },
  {
    type: 'email',
    label: 'Email',
    placeholder: 'Entrez votre email',
    required: true,
    disabled: false,
    readOnly: false,
    customStyles: commonStyles,
  },
  {
    type: 'tel',
    label: 'Numéro de téléphone',
    placeholder: 'Entrez votre numéro de téléphone',
    required: true,
    disabled: false,
    readOnly: false,
    customStyles: commonStyles,
  },
  {
    type: 'password',
    label: 'Mot de passe',
    placeholder: 'Entrez votre mot de passe',
    required: true,
    minLength: 8,
    disabled: false,
    readOnly: false,
    customStyles: commonStyles,
  },
  {
    type: 'date',
    label: 'Date',
    placeholder: '',
    required: false,
    disabled: false,
    readOnly: false,
    customStyles: commonStyles,
  },
];

export { inputConfig, buttonConfig };
