import React from 'react';
import { Box, Text, Group } from '@mantine/core';

const Footer: React.FC = () => {
  return (
    <Box
      style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
        borderTop: '1px solid #dee2e6',
        position: 'fixed',
        bottom: 0,
        left: 0,
      }}
    >
      <Group justify="center" gap="xl" >
        <Text size="sm" c="dimmed">
          &copy; {new Date().getFullYear()} My Company
        </Text>
        <Text size="sm" c="dimmed">
          Privacy Policy
        </Text>
        <Text size="sm" c="dimmed">
          Terms of Service
        </Text>
      </Group>
    </Box>
  );
};

export default Footer;
