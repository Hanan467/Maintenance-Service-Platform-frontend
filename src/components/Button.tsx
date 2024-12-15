import { Button, Center } from '@mantine/core';

type CustomButtonProps = {
  label: string;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, fullWidth = false }) => {
  return (
    <Center>
    <Button fullWidth={fullWidth} bg="#4a33a9" size='md' mt='sm'>
      {label}
    </Button>
    </Center>
  );
};

export default CustomButton;
