// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from '../src/App';

// describe('Front-End Integration Test', () => {
//   it('should navigate after successful login', async () => {
//     render(<App />);

//     // Obtendo os campos de input e o botão
//     const email = screen.getByPlaceholderText('E-mail');
//     const password = screen.getByPlaceholderText('Senha');
//     const loginButton = screen.getByText('ENTRAR');

//     // Simulando as ações do usuário
//     fireEvent.change(email, { target: { value: 'user@example.com' } });
//     fireEvent.change(password, { target: { value: 'password123' } });
//     fireEvent.click(loginButton);

//     // Aguardando e verificando se a página de destino foi renderizada corretamente
//     await waitFor(() => expect(screen.getByText('Bem-vindo ao DeepMuscle')).toBeInTheDocument());
//   });
// });
