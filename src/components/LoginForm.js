import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (username && password ) {
        localStorage.setItem('isLoggedIn', true);
        setLoading(false);
        navigate('/dashboard');
      } else {
        alert('Usuário ou senha inválidos!');
      }
    }, 1000);

  };

  return (
    <Container>
    <Paper style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', textAlign:'center' }}>
     {loading ? <CircularProgress /> : null}
      <h2>Login</h2>
      <TextField
        label="Nome de usuário"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Paper>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: repeating-linear-gradient(45deg, #d6eaf8, #d6eaf8 20px, #eaf3fc 20px, #eaf3fc 40px);
    `;