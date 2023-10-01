import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Color from './pages/Color';

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path='/' element={<Navigate to='/color-converter'/>}></Route>
                  <Route path='*' element={<Color/>}></Route>
                  <Route path='/color-converter' element={<Color/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
