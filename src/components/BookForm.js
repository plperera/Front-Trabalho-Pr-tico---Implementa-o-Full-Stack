import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { Skeleton } from '@mui/material';
const BookForm = ({ onSubmit, initialData }) => {
  const initialFormState = {
    title: '',
    author: '',
    publisher: '',
    year: '',
    genre: '',
    copies: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialData || initialFormState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      onSubmit(formData);
      setFormData(initialFormState);
      setLoading(false);
    }, 1000);
  };
<Skeleton animation="wave" />

  return (
    <Paper style={{ padding: '20px', margin: '20px 0', backgroundColor: 'rgb(255,255,255,0.8)' }}>
      <h3>{initialData ? 'Editar Livro' : 'Adicionar Livro'}</h3>
      {loading ? Object.keys(formData).map((key) => (
        <Skeleton height={80} animation="wave" />
      )):
      Object.keys(formData).map((key) => (
        <TextField
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      ))
      }
      <Button variant="contained" onClick={handleSubmit}>
        {initialData ? 'Atualizar' : 'Adicionar'}
      </Button>
    </Paper>
  );
};

export default BookForm;
