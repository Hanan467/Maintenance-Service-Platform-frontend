import React from 'react';
import { Container, Title, Image, Grid,Text, Flex, Button, Paper, TextInput } from '@mantine/core';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import expertImage1 from '../../../assets/file.png';
import expertImage2 from '../../../assets/exp2.jpg';
import CustomButton from '../../Button';

const Dashboard : React.FC = () => {
    return(
        <Container fluid  h='85vh' w='100vw' p='xl' >
            <Navbar userType='user'/>
            <Flex
      gap="xl"
      justify="start"
      align="start"
      direction="row"
      wrap="nowrap"
      m='lg'
      mb='xl'>
        <TextInput radius={50} size='sm' mt={5} h={'20px'} placeholder='search experts'></TextInput>
      <CustomButton label='Category 1' size='xs'/>
      <CustomButton  label='Category 1'  size='xs'/>
      <CustomButton  label='Category 1'  size='xs' />
      <CustomButton  label='Category 1'  size='xs' />
      <CustomButton  label='Category 1'  size='xs' />
      <CustomButton  label='Category 1'  size='xs'/>
      <CustomButton  label='Category 1'  size='xs' />
      <CustomButton  label='Category 1'  size='xs'/>
      <CustomButton  label='Category 1'  size='xs'/>
      <CustomButton  label='Category 1'  size='xs'/>    
    </Flex>
    <Title order={3} c={'#73A5C6'} mb='lg'>| TOP RATED</Title>
    <Flex
      gap="lg"
      justify="center"
      align="start"
      direction="row"
      wrap="nowrap"
      w={'90vw'}
    >
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs'color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper>
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs' color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper>    
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs'color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper>    
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs'color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper>    
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs'color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper> 
     <Paper shadow="xl" radius="lg" w='230px' h='150px' bg='#eaeced'>
        <Grid>
            <Grid.Col span={4} >
                <Text ms='md' mt='lg' fw={700}>Monika bankins</Text>
            </Grid.Col >
            <Grid.Col span={8}>
                <Image src={expertImage1} w='160px' h='160px' radius='md' mt='sm'/>
            </Grid.Col>
        </Grid>
        <Grid bg='gray' >
        <Grid.Col span={8} >
        <Text ms='lg'  c='white' fw={400}>Electrician</Text>
        </Grid.Col>
        <Grid.Col span={4} >
            <Button radius='xl' size='xs'color='#73A5C6'>... </Button>
        </Grid.Col>
        </Grid>
     </Paper>           
    </Flex>
    <Footer/>
        </Container>
    );
};

export default Dashboard;