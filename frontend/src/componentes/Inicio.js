import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inicio = () => {
  const url = 'http://localhost:3344/libros';
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(url);
        setLibros(response.data);
        console.log('Libros:', response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    obtenerDatos();
  }, [url]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {libros.map((libro, index) => (
            <div key={index} className="col-md-4">
              <div className="book-card">
                <img src={libro.portada} className="custom-libro" alt={libro.titulo} />
                <h2>{libro.titulo}</h2>
                <p>{libro.autor}</p>
                <p>${libro.precio.toFixed(2)}</p>
                <a href={libro.codigo}>
                  <button className="btn btn-primary btn-block">Ver Libro</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;