import { Button, Center } from '@mantine/core';

type CustomButtonProps = {
  label: string;
  fullWidth?: boolean;
  size:string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, fullWidth = false ,size='md'}) => {
  return (
    <Center>
    <Button fullWidth={fullWidth} bg='#73A5C6' size={size} mt='sm' radius='lg'>
      {label}
    </Button>
    </Center>
  );
};


export default CustomButton;
