import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Login from './components/auth/Login';
import Register from './components/auth/registration';
import ForgotPassword from './components/auth/ForgotPssword';

function App() {

  return (
    <MantineProvider >
      <ForgotPassword />
    </MantineProvider>
  )
}

export default App
