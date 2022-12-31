// input: array of authors, id
function findAuthorById(authors, id) {
  //use find method to find the author with the matching id
  return authors.find((author) => author.id === id);
} //output: return the author object



// input: array of books, id
function findBookById(books, id) {
  //use find method to find the book with the matching id
  return books.find((book) => book.id === id);
} //output: return the book object



// input: array of books
function partitionBooksByBorrowedStatus(books) {
  //use filter method to return an array of books that have been borrowed
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  //use filter method to return an array of books that have not been borrowed
  const returned = books.filter((book) => book.borrows[0].returned === true);
  //return an array of the two arrays
  return [borrowed, returned];
} //output: return an array of the two arrays



// input: book object, array of accounts using map, const, spread operator, slice
function getBorrowersForBook(book, accounts) { 
  //use map method to return an array of accounts and their information
  return book.borrows.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return { ...account, returned: borrow.returned };
  }).slice(0, 10);
} //output: return an array of the two arrays



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
