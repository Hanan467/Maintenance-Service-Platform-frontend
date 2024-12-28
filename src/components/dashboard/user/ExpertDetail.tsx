import React from "react";
import { Card, Image, Group, Text, Button, Badge, Stack, Divider, Container } from "@mantine/core";
import expertImage2 from '../../../assets/exp2.jpg';

const ExpertDetail: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures vertical centering
      }}
    >
      <Card shadow="sm" padding="lg" radius="md" w="2600px" withBorder style={{ maxWidth: 600 }}>
        <Group gap="apart" align="start">
          {/A* Profile Image */}
          <Image
            src={expertImage2} // Replace with actual image URL
            alt="Profile"
            radius="md"
            width={100}
            height={100}
          />

          {/* Profile Info */}
          <Stack gap="xs" style={{ flexGrow: 1 }}>
            <Text size="lg" fw={700}>
              Jeremy Rose
            </Text>
            <Text size="sm" color="dimmed">
              Product Designer
            </Text>
            <Text size="sm" color="dimmed">
              New York, NY
            </Text>
            <Group gap="xs">
              <Badge color="blue" size="sm">
                8.6
              </Badge>
              <Text size="xs" color="dimmed">
                ★★★★★
              </Text>
            </Group>
          </Stack>

          {/* Action Buttons */}
        </Group>

        <Divider my="sm" />

        {/* Work Section */}
        <Text fw={700} size="sm">
          Work
        </Text>
        <Group gap="apart" mt="xs">
          <Stack gap={0}>
            <Text size="sm">Spotify New York</Text>
            <Text size="xs" c="dimmed">
              170 William Street, New York, NY
            </Text>
          </Stack>
          <Badge color="blue" size="sm">
            Primary
          </Badge>
        </Group>

        <Group gap="apart" mt="xs">
          <Stack gap={0}>
            <Text size="sm">Metropolitan Museum</Text>
            <Text size="xs" c="dimmed">
              525 E 68th Street, New York, NY
            </Text>
          </Stack>
          <Badge color="green" size="sm">
            Secondary
          </Badge>
        </Group>

        <Divider my="sm" />

        {/* Skills Section */}
        <Text fw={700} size="sm">
          Skills
        </Text>
        <Group gap="xs" mt="xs">
          {["Branding", "UI/UX", "Web Design", "Packaging", "Print & Editorial"].map((skill) => (
            <Badge key={skill} color="teal" size="sm">
              {skill}
            </Badge>
          ))}
        </Group>

        <Divider my="sm" />

        {/* Contact Information */}
        <Text fw={700} size="sm">
          Contact Information
        </Text>
        <Stack gap="xs" mt="xs">
          <Text size="sm">Phone: +1 123 456 7890</Text>
          <Text size="sm">Email: hello@jeremyrose.com</Text>
          <Text size="sm">Website: www.jeremyrose.com</Text>
        </Stack>

        <Divider my="sm" />

        {/* Basic Information */}
        <Text fw={700} size="sm">
          Basic Information
        </Text>
        <Stack gap="xs" mt="xs">
          <Text size="sm">Gender: Male</Text>
        </Stack>
      </Card>
    </Container>
  );
};

export default ExpertDetail;
