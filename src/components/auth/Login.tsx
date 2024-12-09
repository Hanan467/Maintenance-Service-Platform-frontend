import React from 'react';
import { Container, Center, TextInput, Text, Title, Paper ,Button,Group,Image} from '@mantine/core';
import CustomButton from '../Button';
import { useForm } from '@mantine/form';
import GoogleLogo from '../assets/google.jpg'; 

const Login = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    
    return(
        <Container fluid bg='#eaeced'
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}>
            <Paper shadow="xl" radius="lg" p="xl" style={{ width: '460px',height:'460px'}}>
                <Center>
                <Title order={2}>Welcome Back</Title>
                </Center>
                <Center>
                <Text>Glad to see you again</Text>
                </Center>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput mt='md'
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
            />

            <TextInput mt='md'mb='lg'
            withAsterisk
            label="password"
            placeholder="********"
            key={form.key('password')}
            {...form.getInputProps('password')}
            />
            <CustomButton label="Log In"   />
            </form>
            <Button
      variant="outline"
      radius="md"
      size="md"
      mt='md'
      style={{
        borderColor: '#ddd',
        color: '#555',
        fontWeight: 500,
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        width:'100%',
      }}
    >
      <Group gap="sm">
        <Image
          src="{GoogleLogo}"
          alt="Google logo"
          width={20}
          height={20}
        />
        Continue with Google
      </Group>
    </Button>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <Text component="a" href="/register" size="sm" c="blue" >
              Don’t have an account? Sign up
              </Text>
            </div>
            </Paper>
        </Container>
    );
};

export default Login;