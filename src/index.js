import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles';
import Routes from './Routes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <Routes />
    <GlobalStyle/>
  </>
); 

// <> - fregmment

// NO react funciona igual Sanduiche, sempre será necessário um pão encobrindo todo mundo