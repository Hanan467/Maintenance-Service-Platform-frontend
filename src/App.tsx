import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Login from './components/auth/Login';
import Register from './components/auth/registration';
import ForgotPassword from './components/auth/ForgotPssword';
import Home from './components/dashboard/user/Home';

function App() {

  return (
    <MantineProvider >
      <Home />
    </MantineProvider>
  )
}

export default App
