import {
  TextInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function CreateExplore() {
  const navigation = useNavigate()
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Start exploring!!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an room ID?{" "}
        <Anchor<'a'> href="/" size="sm" onClick={(event) => {
          event.preventDefault()
          navigation('/')
        }}>
          Join
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Username" placeholder="Peter Griffin" required />
        <Button fullWidth mt="xl">
          Create
        </Button>
      </Paper>
    </Container>
  );
}