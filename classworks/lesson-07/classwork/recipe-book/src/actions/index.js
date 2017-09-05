export default function selectBook(book) {
  return {
    type: 'BOOK_SELECT',
    data: book
  };
}