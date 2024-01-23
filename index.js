function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const mainElement = document.querySelector('main');

  books.forEach(book => {
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.name;
    mainElement.appendChild(titleElement);
  });
}

fetchBooks();

module.exports = { fetchBooks, renderBooks };
