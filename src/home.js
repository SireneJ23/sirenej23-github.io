// return the number of books objects in the array and 0 if the array is empty
function getTotalBooksCount(books) {
  return books.length;
} //output: return the number of books in the library



//  array of all the accounts in the library
function getTotalAccountsCount(accounts) {
  return accounts.length;
} //output: return the number of accounts in the library



// an array of all the books that are currently checked out using reduce
function getBooksBorrowedCount(books) {
  return books.reduce((total, book) => {
    if (!book.borrows[0].returned) {
      total++;
    }
    return total;
  }, 0);
} //output: return the number of books that are currently checked out



// an array of the five most common genres in the library using let, for...in, find, push, sort, slice
function getMostCommonGenres(books) {
  let genres = [];
  for (let book of books) {
    let genre = genres.find((genre) => genre.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      genres.push({ name: book.genre, count: 1 });
    }
  }
  return genres.sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5);
} //output: return an array of the five most common genres in the library



// an array of the five most popular books in the library using let, forEach, const, if...else, push, sort, slice
function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
    const popularBook = popularBooks.find((popularBook) => popularBook.name === book.title);
    if (popularBook) {
      popularBook.count++;
    } else {
      popularBooks.push({ name: book.title, count: book.borrows.length });
    }
  });
  return popularBooks.sort((popularBookA, popularBookB) => popularBookB.count - popularBookA.count).slice(0, 5);
} //output: return an array of the five most popular books in the library



// an array of the five most popular authors in the library using let, forEach, arrowf, find, destructuring, if...else, push, template literals, sort, slice
function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach((book) => {
    //loop through the books array to find the authorId
    const author = authors.find((author) => author.id === book.authorId);
    const popularAuthor = popularAuthors.find((popularAuthor) => popularAuthor.name === `${author.name.first} ${author.name.last}`);
    if (popularAuthor) {
      popularAuthor.count += book.borrows.length;
    } else {
      popularAuthors.push({ name: `${author.name.first} ${author.name.last}`, count: book.borrows.length });
    }
  });
  //sort the popularAuthors array by the count property in descending order and slice to return the first five elements
  return popularAuthors.sort((popularAuthorA, popularAuthorB) => popularAuthorB.count - popularAuthorA.count).slice(0, 5);
} //output: return an array of the five most popular authors in the library



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
