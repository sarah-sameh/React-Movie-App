import NotFound from './components/Notfound';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import MoveDetails from './components/Movedetails';
// import WatchList from './components/Watchlist';
//import MoveList from './components/Movelist';
//import Register from './components/Register';


//code splitting

import React, { Suspense } from 'react';
import { LanguageProvider } from './context/language';
const MoveList = React.lazy(() => import('./components/Movelist'));
const MoveDetails = React.lazy(() => import('./components/Movedetails'));
const WatchList = React.lazy(() => import('./components/Watchlist'));
const Register = React.lazy(() => import('./components/Register'));




function App() {
  return (
    

    <BrowserRouter>
    <LanguageProvider>
    <Header/>
    <div className='container my-5'>
      <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
          <Route path="" element={<MoveList/>}/>
          <Route path="showdetails/:id" element={<MoveDetails/>}/>
          <Route path="watch" element={<WatchList/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
      </div>
      </LanguageProvider>
    </BrowserRouter>
  
    
  );
}

export default App;
