import React from 'react';
import { Container, Title, Image, Grid,Text, Flex, Button } from '@mantine/core';
import HeroImage from '../assets/service-man.webp';
import Navbar from './Navbar';
import Footer from './Footer';
const Home : React.FC = () => {
    return(
        <Container>
            <Navbar/>
            <Grid>
                <Grid.Col span={11}>
                    <Flex justify='center' ms='xl' direction={'column'} h='70vh' w='500'>
                    <Title order={1} c='#4a33a9' ms='xl' >
                        Home Appliance Repair
                    </Title>
                    <Text ms='xl' mt='lg'>
                    From cleaning and electrical fixes to plumbing and home maintenance, find skilled and verified professionals near you effortlessly. Experience fast, reliable, and affordable services tailored to your needs—all with just a single click                    </Text>
                    <div>
                    <Button bg='#4a33a9' ms='xl'mt='lg'>
                        Get Started
                    </Button>
                    </div>
                    </Flex>
                    
                </Grid.Col>
                <Grid.Col span={1}>
                    <Image src={HeroImage} w={600} h={500}  />
                        
                </Grid.Col>
            </Grid>
            <Footer/>
        </Container>
    );
};

export default Home;