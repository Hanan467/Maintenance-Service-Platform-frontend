import React from 'react';
import { Box, Group, Text, UnstyledButton } from '@mantine/core';

// Define types for navbar links
type NavbarLink = {
  label: string;
  onClick: () => void;
};

const NavbarLinks: NavbarLink[] = [
  {
    label: 'Home',
    onClick: () => alert('Navigate to Home'),
  },
  {
    label: 'About Us',
    onClick: () => alert('Navigate to Profile'),
  },
  {
    label: 'Contact Us',
    onClick: () => alert('Navigate to Settings'),
  },
  {
    label: 'Sign In',
    onClick: () => alert('Logout clicked'),
  },
];

// NavbarLink component
const NavbarLinkItem: React.FC<NavbarLink> = ({ label, onClick }) => (
  <UnstyledButton
    onClick={onClick}
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

const Navbar: React.FC = () => {
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
      <Group  align="center">
        {/* Logo or Brand Name */}
        <Text size="lg" style={{weight:'0'}}>
          FixIt
        </Text>
        {/* Links */}
        <Group gap="xl" >
          {NavbarLinks.map((link, index) => (
            <NavbarLinkItem
              key={index}
              label={link.label}
              onClick={link.onClick}
            />
          ))}
        </Group>
      </Group>
    </Box>
  );
};

export default Navbar;
