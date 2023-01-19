// Book Constructor

function Book(title, author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor

function UI(){}

UI.prototype.addBook = function(book){
  // Get the table body
  console.log(book)
  const tableBody = document.getElementById('bookList');
  const row = document.createElement('tr');
  row.innerHTML =
   `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td class="delete">x</td>
   `
   tableBody.appendChild(row)
}
// Events 
const formElement = document.getElementById('book-form')
// Add the event listener
formElement.addEventListener('submit',(e)=>{
 e.preventDefault()   

 // Get the values from the input fields
 const title = document.getElementById('title').value,
       author = document.getElementById('author').value,
       isbn = document.getElementById('isbn').value

// Instantiate the Book object
const book = new Book(title, author, isbn)

const ui = new UI();

// Add Book to UI
ui.addBook(book);

})