import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const RentalHistory = ({ history }) => (
  <Paper style={{ padding: '20px', backgroundColor:'rgb(255,255,255,0.8)' }}>
    <h3>Histórico de Aluguéis</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Cliente</TableCell>
          <TableCell>Administrador</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.customer}</TableCell>
            <TableCell>{item.admin}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default RentalHistory;
