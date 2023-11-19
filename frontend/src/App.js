import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' element = {<MostrarLibros>

      </MostrarLibros>}>
      </Route>
    </BrowserRouter>
  );
}

export default App;
