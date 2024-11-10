import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do Bootstrap
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js'; // Importa o tema personalizado
import { useClient } from './utils/request.jsx';
import { QueryClientProvider } from '@tanstack/react-query';

const client = useClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
)
