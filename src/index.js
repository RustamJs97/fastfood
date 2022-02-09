import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom'
import CONTEXT from './Context/Home/context'
import CONTEX from './Context/all/context'
ReactDOM.render(
  <CONTEX>
    <CONTEXT>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </CONTEXT>
  </CONTEX>,
  document.getElementById('root')
);