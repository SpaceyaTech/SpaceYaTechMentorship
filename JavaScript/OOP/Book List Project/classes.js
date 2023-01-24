const tableBody = document.querySelector("#table-body");
const formElement = document.querySelector("#form");
const genBtn = document.querySelector("#genBtn")
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UIController {
  async addBookToUI(book) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td id="delete"><i class="fa-solid fa-trash text-danger delete" style="cursor:pointer"></i></td>
        `;
    tableBody.appendChild(tr);
    let booksStorage = await localforage.getItem("books");
    if (booksStorage) {
      const booksStorageUpdates = await localforage.setItem("books", [
        ...booksStorage,
        book,
      ]);
    } else {
      const setBooks = await localforage.setItem("books", [book]);
      booksStorage = await localforage.getItem("books");
    }
  }
  alerts(alertType) {
    const alertContainer = document.querySelector("#alert");
    if (alertType === "success") {
      alertContainer.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
         <strong>Book added successfully</strong> 
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`;
    } else if (alertType === "delete") {
      alertContainer.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Book deleted successfully</strong> 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    } else {
      alertContainer.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>You need to provide all the fields</strong> 
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`;
    }
  }
 async deleteBook(target) {
    if (target.classList.contains("delete")) {
      const ui = new UIController();
      target.parentElement.parentElement.remove();
      let booksStorage = await localforage.getItem("books");
      const filterValue = target.parentElement.parentElement.firstChild.textContent;
      const newArr =  booksStorage.filter((book) => book.title !== filterValue);
      await localforage.setItem(
        "books",
         newArr
      );
      ui.alerts("delete");
    }
  }
  clearFields() {
    // This will reset the form fields
    document.querySelector("#form").reset();
  }
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#ISBN").value;
  const ui = new UIController();

  if (!title.trim() || !author.trim() || !isbn.trim()) {
    ui.alerts("error");
  } else {
    const book = new Book(title, author, isbn);
    ui.alerts("success");
    ui.addBookToUI(book);
    ui.clearFields();
  }
});

// Add an event listener to the table body. We will use event delegation to pass donwn the click event to the trash icon

tableBody.addEventListener("click", function (e) {
  const ui = new UIController();
  ui.deleteBook(e.target);
  e.preventDefault();
});

async function clearLocal() {
  try {
    const response = await localforage.clear();
    console.log("Database is now empty.");
  } catch (error) {
    console.log(err);
  }
}


window.onload = async function () {
  let booksStorage = await localforage.getItem("books");
  booksStorage.forEach(function(book) {
    tableBody.innerHTML += `<td>${book.title}</td>
                               <td>${book.author}</td>
                               <td>${book.isbn}</td>
                               <td id="delete"><i class="fa-solid fa-trash text-danger delete" style="cursor:pointer"></i></td>
                               `;
  });
};






