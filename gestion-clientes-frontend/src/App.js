import logo from './logo.svg';
import './App.css';
import ListClienteComponent from './components/ListClienteComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClientComponent from './components/AddClientComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListClienteComponent/>}></Route>
          <Route path='/clientes' element={<ListClienteComponent/>}></Route>
          <Route path='/add-cliente/' element={<AddClientComponent/>}></Route>
          <Route path='/edit-cliente/:id' element={<AddClientComponent/>}></Route>
        </Routes>
      </div>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
