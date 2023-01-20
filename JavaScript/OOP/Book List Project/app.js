// Create a construtor for books

// Book constructor
function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UIController(){};


UIController.prototype.addBookToUI = function(book){
 const tableBody = document.querySelector('#table-body');
 const tr = document.createElement('tr');
 tr.innerHTML = 
 `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><button type="button" class="btn btn-light btn-sm"><i class="fa-solid fa-trash text-danger"></i></button></td>
 `;
 tableBody.appendChild(tr);
};

UIController.prototype.alerts = function(alertType){
    const alertContainer = document.querySelector('#alert')
    if(alertType === 'success'){     
     alertContainer.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
     <strong>Book added successfully</strong> 
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
    }else{
        alertContainer.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
     <strong>You need to provide all the fields</strong> 
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
        
    }
};

// Clear Fields Method
UIController.prototype.clearFields = function(){
    
    document.querySelector('#form').reset();
    
    // document.querySelector('#title').value = '';
    // document.querySelector('#author').value = '';
    // document.querySelector('#ISBN').value = '';

};



// Add event listeners
const formElement = document.querySelector('#form');
formElement.addEventListener('submit',function(e){
  e.preventDefault();
  const title = document.querySelector('#title').value;  
  const author = document.querySelector('#author').value; 
  const isbn = document.querySelector('#ISBN').value; 
  const ui = new UIController();

  if(!title.trim() || !author.trim() || !isbn.trim()){
    ui.alerts('error');
  }else{
   const book = new Book(title, author, isbn);
   ui.alerts('success');
   ui.addBookToUI(book);
   ui.clearFields();
  }
});