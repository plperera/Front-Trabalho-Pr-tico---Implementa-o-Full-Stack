const mockDatabase = {
    books: [
      {
        id: 1,
        title: 'Dom Casmurro',
        author: 'Machado de Assis',
        publisher: 'Editora Globo',
        year: 1899,
        genre: 'Romance',
        copies: 5,
        description: 'Um clássico da literatura brasileira.',
      },
      {
        id: 2,
        title: 'O Hobbit',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        year: 1937,
        genre: 'Fantasia',
        copies: 3,
        description: 'A aventura de Bilbo Bolseiro na Terra Média.',
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        publisher: 'Companhia das Letras',
        year: 1949,
        genre: 'Ficção Distópica',
        copies: 2,
        description: 'Uma história sobre um regime totalitário e vigilância.',
      },
    ],
    rentalHistory: [
      {
        id: 1,
        bookId: 1,
        customer: 'João Silva',
        admin: 'Admin',
        status: 'Alugado',
        date: '2024-12-01 14:30',
      },
      {
        id: 2,
        bookId: 2,
        customer: 'Maria Oliveira',
        admin: 'Admin',
        status: 'Devolvido',
        date: '2024-11-25 10:00',
      },
    ],
  };
  
  export default mockDatabase;
  