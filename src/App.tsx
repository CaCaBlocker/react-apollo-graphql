import { useQuery, gql } from '@apollo/client';

import './App.css'

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

type Book = {
  title: string;
  author: string;
}

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((book: Book, index: number) => (
    <div key={index}>
      <p>{book.title} - {book.author}</p>
    </div>
  ));
}

function App() {

  return (
    <div>
      <h2>My Book List 🚀</h2>
      <DisplayLocations />
    </div>
  )
}

export default App
