import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import RentalHistory from '../components/RentalHistory';
import mockDatabase from '../mockDatabase';
console.log(mockDatabase)
const Dashboard = () => {
  const [books, setBooks] = useState(mockDatabase.books);
  const [history, setHistory] = useState(mockDatabase.rentalHistory);
  const [editingBook, setEditingBook] = useState(null);

  const addOrUpdateBook = (book) => {
    if (editingBook) {
      setBooks((prev) =>
        prev.map((b) => (b.id === book.id ? { ...b, ...book } : b))
      );
      setEditingBook(null);
    } else {
      setBooks((prev) => [...prev, { ...book, id: Date.now() }]);
    }
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const rentBook = (book) => {
    if (book.copies > 0) {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === book.id ? { ...b, copies: b.copies - 1 } : b
        )
      );
      setHistory((prev) => [
        ...prev,
        {
          date: new Date().toLocaleString(),
          customer: 'João admin',
          admin: 'Admin',
          status: 'Alugado',
        },
      ]);
    } else {
      alert('Nenhuma cópia disponível para aluguel!');
    }
  };

  return (
    <div>
      <BookForm onSubmit={addOrUpdateBook} initialData={editingBook} />
      <BookList
        books={books}
        onEdit={setEditingBook}
        onDelete={deleteBook}
        onRent={rentBook}
      />
      <RentalHistory history={history} />
    </div>
  );
};

export default Dashboard;
