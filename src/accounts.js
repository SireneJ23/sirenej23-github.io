// Input: accounts array, id
function findAccountById(accounts, id) {
  //use find method to find the account with the matching id
  return accounts.find(account => account.id === id);
} //output: return the account object



// Input: array of account objects using sort and ternary operator
function sortAccountsByLastName(accounts) {
  //sort the accounts array by last name
  return accounts.sort((A1, A2) => A1.name.last > A2.name.last ? 1 : -1);
} //output: sorted array of account objects



// Input: account object, array of book objects
function getTotalNumberOfBorrows(account, books) {
  //use forEach to iterate through the books array
  let total = 0;
  books.forEach((book) => {
    //use forEach to iterate through the borrows array and check if the id matches the account id and increment the total time borrowed
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        total++;
      }
    });
  });
  return total;
} //output: total number

// helper function to find the author object and ID for the book
function findAuthorAndId(authors, id) {
  return authors.find((author) => author.id === id);
}



// Input: account object, array of book objects, array of author objects using let, const, filter and map
function getBooksPossessedByAccount(account, books, authors) {
  let booksborrowed = books.filter((book) => {
    const lastborrow = book.borrows[0];
    return !lastborrow.returned && lastborrow.id === account.id;
 }
);
  return booksborrowed.map((book) => {
    const { id, title, genre, borrows } = book;
    const author = findAuthorAndId(authors, book.authorId);
    return { id, title, genre, borrows, author };
 });
} //output: array of book objects

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
