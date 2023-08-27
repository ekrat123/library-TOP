const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newElement) {
  myLibrary.push(newElement);
}

const container = document.querySelector(".container");
const addButton = document.querySelector(".newBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#isRead");

function addBookToScreen(book) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  title.textContent = book.title;
  const author = document.createElement("div");
  author.textContent = book.author;
  const pages = document.createElement("div");
  pages.textContent = book.pages;
  const read = document.createElement("div");
  read.textContent = book.read;
  card.classList.add("card");
  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
}

function addBooksToPage(lib) {
  lib.forEach(addBookToScreen);
}

addButton.addEventListener("click", function () {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = isReadInput.value;
  let newBookObj = new Book(title, author, pages, read);
  addBookToLibrary(newBookObj);
  addBooksToPage(myLibrary);
  console.log(myLibrary);
});
