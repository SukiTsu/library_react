// Interface pour une option de bouton radio
export interface RadioOption {
  label: string;
  value: string;
}

// Interface pour les props du composant RadioGroup
export interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

// Options statiques définies ici
export const defaultRadioOptions: RadioOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];
