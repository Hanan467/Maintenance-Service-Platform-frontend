import { TextInput } from '@mantine/core';

interface InputFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type:string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, required = false ,type}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
};

export default InputField;
