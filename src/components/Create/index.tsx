import {
  TextInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSupabase } from '../../utils/supabase';

export function CreateExplore() {
  const navigation = useNavigate()
  const supabase = useSupabase();
  const form = useForm({
    initialValues: {
      username: '',
    }
  })


  const createRoom = async (values: any) => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" }).then(async function (result) {
          if (result.state === "granted") {
            const { data: room, error } = await supabase.from('room').insert([{}]).select('id').single()
            if (error) {
              throw new Error(error.message)
            }
            const room_id = room?.id

            return room_id
          } else {
            alert("Please enable location access to continue")
          }
        }).catch(function (error) {
          throw new Error(error)
        });
    } else {
      throw new Error('Geolocation is not supported by this browser.')
    }
  }

  const {
    isLoading,
    mutate: createUserAndRoom,
  } = useMutation(createRoom, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.error(error)
    }
  })

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
        <form
          onSubmit={form.onSubmit(value => createUserAndRoom(value))}
        >
          <TextInput
            {...form.getInputProps('username')}
            label="Username" placeholder="Peter Griffin" required />
          <Button
            type='submit'
            loading={isLoading}
            fullWidth mt="xl">
            Create
          </Button>
        </form>
      </Paper>
    </Container>
  );
}