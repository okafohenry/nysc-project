import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {Dashboard, Faq, Report} from './pages';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Report/>} />
      <Route path='faq' element={<Faq />} />  
      <Route path='v1/admin/*' element={<Dashboard />} /> 
    </Routes>
  );
}

export default App;
