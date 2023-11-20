libros.forEach(libro => {
    const divCol = document.createElement("div");
    divCol.className = "col-md-4";
  
    const divBookCard = document.createElement("div");
    divBookCard.className = "book-card";
  
    const img = document.createElement("img");
    img.src = libro.img;
    img.className = "custom-libro";
    img.alt = libro.titulo;
  
    const h2 = document.createElement("h2");
    h2.textContent = libro.titulo;
  
    const pAutor = document.createElement("p");
    pAutor.textContent = libro.autor;
  
    const pPrecio = document.createElement("p");
    pPrecio.textContent = `$${libro.precio.toFixed(2)}`;
  
    const a = document.createElement("a");
    a.href = libro.dir;
  
    const button = document.createElement("button");
    button.className = "btn btn-primary btn-block";
    button.textContent = "Ver Libro";
  
    a.appendChild(button);
  
    divBookCard.appendChild(img);
    divBookCard.appendChild(h2);
    divBookCard.appendChild(pAutor);
    divBookCard.appendChild(pPrecio);
    divBookCard.appendChild(a);
  
    divCol.appendChild(divBookCard);
  
    librosContainer.appendChild(divCol);
  });