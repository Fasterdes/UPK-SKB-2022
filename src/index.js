import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './style/GlobalStyles';
import { BrowserRouter as Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
   <Routes> 
      <GlobalStyles/>
     <App />
   </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


