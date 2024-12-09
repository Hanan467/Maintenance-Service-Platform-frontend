import React from 'react';
import { Container, Center, TextInput, Text, Title, Paper,Grid, PasswordInput, NumberInput, Select} from '@mantine/core';
import CustomButton from '../Button';
import { useForm } from '@mantine/form';
const Register = () => {
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
      const phone = ' +251 ';

    return(
        <Container fluid bg='#eaeced'
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}>
            <Paper shadow="xl" radius="lg" p="xl" style={{ width: '700px',height:'500px'}}>
                <Title order={2}>Sign Up</Title>
                <Text c="dimmed" mt={2}>Enter your details below to create an account and get started</Text>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid>
                <Grid.Col span={6} >
            <TextInput mt='md'
            withAsterisk
            label="Full name"
            placeholder="your full name"
            key={form.key('fullname')}
            {...form.getInputProps('fullname')}
            />
            </Grid.Col>
            <Grid.Col span={6}>
            <TextInput mt='md'
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
            />
              </Grid.Col>
            </Grid>
            
              <Grid>
                <Grid.Col span={6} >
                <PasswordInput mt='md'
            withAsterisk
            label="Password"
            placeholder="********"
            key={form.key('password')}
            {...form.getInputProps('password')}
            />
            </Grid.Col>
            <Grid.Col span={6}>
            <PasswordInput mt='md'
            withAsterisk
            label="Confirm password"
            placeholder="********"
            key={form.key('confirmpassword')}
            {...form.getInputProps('confirmpassword')}
            />
              </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={6} >
                <NumberInput mt='md'mb='lg'
            withAsterisk
            label="Phone number"
            placeholder=" 965348196"
            allowDecimal={false}
            clampBehavior="strict"
            min={0}
            leftSection={phone}
            key={form.key('phoneno')}
            {...form.getInputProps('phoneno')}
            />
            </Grid.Col>
            <Grid.Col span={6}>
            <Select mt='md'mb='lg'
            label="Your Expertise"
            placeholder="Pick value"
            data={['abc', 'def', 'ghi', 'jkl']}
            searchable
            nothingFoundMessage="Nothing found..."
            />
              </Grid.Col>
            </Grid>
            <CustomButton label="Sign Up"  />
            </form>
     
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <Text component="a" href="/register" size="sm" c="blue" >
              Already have an account? Sign in
              </Text>
            </div>
            </Paper>
        </Container>
    );
};

export default Register;