import React from 'react';
import { Container, Center, TextInput, Text, Title, Paper ,Button,Group,Image} from '@mantine/core';
import CustomButton from '../Button';
import { useForm } from '@mantine/form';

const ForgotPassword = () => {
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
            <Paper shadow="xl" radius="lg" p="xl" style={{ width: '460px',height:'auto'}}>
                <Center>
                <Title order={2} mt='md'>Forgot Password?</Title>
                </Center>
                <Center>
                <Text c="dimmed" mt='sm' mb='md'>No worries we will send yoou reset instructions</Text>
                </Center>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput mt='md'
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
            />

            <CustomButton label="Continue"   />
            </form>
{/*          
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <Text component="a" href="/register" size="sm" c="blue" >
              Don’t have an account? Sign up
              </Text>
            </div> */}
            </Paper>
        </Container>
    );
};

export default ForgotPassword;