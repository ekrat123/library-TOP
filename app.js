const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const container = document.querySelector(".container");
const addButton = document.querySelector(".newBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#isRead");

function displayBooks() {
  container.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.read}</p>
    <button data-index="${index}" class = "remove-book">Remove</button>
    <button data-index = "${index}" class = "toggle-read">${
      book.read == "yes"
        ? "Mark Unread"
        : book.read == "no"
        ? "Mark Read"
        : null
    }</button>
    `;
    container.appendChild(card);
  });
}

function createNewBook() {
  if (titleInput.value) {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      isReadInput.value
    );
    myLibrary.push(newBook);
    displayBooks();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.value = "";
  }
}

addButton.addEventListener("click", createNewBook);

function removeBook(e) {
  if (e.target.classList.contains("remove-book")) {
    const index = e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

container.addEventListener("click", removeBook);

function updateBook(e) {
  if (e.target.classList.contains("toggle-read")) {
    const index = e.target.getAttribute("data-index");
    myLibrary[index].read = myLibrary[index].read === "yes" ? "no" : "yes";
    displayBooks();
  }
}

container.addEventListener("click", updateBook);