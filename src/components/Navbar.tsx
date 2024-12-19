import React from 'react';
import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type NavbarLink = {
  label: string;
  path: string;
};

const landingPageLinks: NavbarLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contactus' },
  { label: 'Sign In', path: '/login' },
];

const userLinks: NavbarLink[] = [
  { label: 'Dashboard', path: '/userdashboard' },
  { label: 'My Services', path: '/services' },
  { label: 'Profile', path: '/profile' },
  { label: 'Logout', path: '/logout' },
];

const expertLinks: NavbarLink[] = [
  { label: 'Dashboard', path: '/expertdashboard' },
  { label: 'Requests', path: '/requests' },
  { label: 'Reports', path: '/reports' },
  { label: 'Logout', path: '/logout' },
];

// NavbarLink component
const NavbarLinkItem: React.FC<NavbarLink> = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      onClick={() => navigate(path)}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#000',
        borderRadius: 4,
        transition: 'background-color 0.2s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      {label}
    </UnstyledButton>
  );
};

const Navbar: React.FC<{ userType?: 'landing' | 'user' | 'expert' }> = ({ userType = 'landing' }) => {
  let navbarLinks: NavbarLink[];

  if (userType === 'user') {
    navbarLinks = userLinks;
  } else if (userType === 'expert') {
    navbarLinks = expertLinks;
  } else {
    navbarLinks = landingPageLinks;
  }

  return (
    <Box
      style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        borderBottom: '1px solid #dee2e6',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Group align="center">
        <Text size="lg" >
          FixIt
        </Text>
        <Group gap="xl">
          {navbarLinks.map((link, index) => (
            <NavbarLinkItem key={index} label={link.label} path={link.path} />
          ))}
        </Group>
      </Group>
    </Box>
  );
};

export default Navbar;
