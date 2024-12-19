import { Button, Center } from '@mantine/core';

type CustomButtonProps = {
  label: string;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, fullWidth = false }) => {
  return (
    <Center>
    <Button fullWidth={fullWidth} bg='#73A5C6' size='md' mt='sm' radius='lg'>
      {label}
    </Button>
    </Center>
  );
};


export default CustomButton;
