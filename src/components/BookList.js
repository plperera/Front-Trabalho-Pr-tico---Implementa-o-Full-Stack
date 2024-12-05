import React from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';


const BookList = ({ books, onEdit, onDelete, onRent }) => (
  <Paper style={{ padding: '20px',  backgroundColor:'rgb(255,255,255,0.8)' }}>
    <h3>Lista de Livros</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Título</TableCell>
          <TableCell>Autor</TableCell>
          <TableCell>Gênero</TableCell>
          <TableCell>Exemplares</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.copies}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(book)}>Editar</Button>
              <Button onClick={() => onDelete(book.id)}>Excluir</Button>
              <Button onClick={() => onRent(book)}>Alugar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default BookList;
