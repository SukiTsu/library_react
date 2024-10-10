export interface SelectProps {
  options: { value: string; label: string }[];
  label?: string; 
  required?: boolean;
  multiple?: boolean;
  customStyles?: {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    width?: string;
    labelColor?: string;
    borderRadius?: string;
  };
}
const commonStyles = {
  borderColor: 'red',
  backgroundColor: '#ccc',
  width: '100%',
  labelColor: 'grey',
  borderRadius: '5px',
};

const selectConfig: SelectProps = {
  label: 'Choisissez une option',
  required: true,
  multiple: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  customStyles: commonStyles,
};

export { selectConfig };
