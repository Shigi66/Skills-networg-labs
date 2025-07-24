let books = [];
// Funcion para agregar un libro a la lista
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) { // Validamos que todos los campos tengan datos y que paginas sea un numero valido
        const book = {// Creamos una "tarjeta" con la informacion del libro
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);// agregar libro a la lista
        showbooks();//  Mostrar  libros actualizados
        clearInputs();// Limpiar los campos del formulario 
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

// Funcion para mostrar todos los libros que estan en la lista
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Número de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro: </strong>${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pagesNumber} página(s)</p>
        <button onclick="editbook(${index})">Editar</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
// funcion para editar in libro  seleccionado
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Eliminar libro viejo
    showbooks(); // Actualizar lista
  }
//funcion limpiar campor del formulario
  function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}