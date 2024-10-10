import { ButtonProps } from './Button';

const buttonPrimaryConfig: ButtonProps = {
  label: 'Submit',
  onClick: () => alert('Primary button clicked!'),
  type: 'primary',
  customStyles: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: "grey",
    borderRadius: '5px',
  },
};

const buttonSecondaryConfig: ButtonProps = {
  label: 'Cancel',
  onClick: () => alert('Secondary button clicked!'),
  type: 'secondary',
};

const buttonDangerConfig: ButtonProps = {
  label: 'Delete',
  onClick: () => alert('Danger button clicked!'),
  type: 'danger',
  loading: false,
};

export { buttonPrimaryConfig, buttonSecondaryConfig, buttonDangerConfig };
