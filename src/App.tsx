import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Login from './auth/Login';

function App() {

  return (
    <MantineProvider >
      <Login />
    </MantineProvider>
  )
}

export default App
