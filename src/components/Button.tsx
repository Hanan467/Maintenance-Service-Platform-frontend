import { Button } from '@mantine/core';

interface CustomButtonProps {
  label: string;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, fullWidth = false }) => {
  return (
    <Button fullWidth={fullWidth} bg="#4a33a9">
      {label}
    </Button>
  );
};

export default CustomButton;
