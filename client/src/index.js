import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

// redux를 쓰기위한 import
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promissMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';


// reducer를 쓰기위한 import
import Reducer from './_reducer';

// redux를 쓰기위해 만듬 promiss와 thunk를 사용하기위해 선언
// 아래 redux의 provide에 만든 변수를 넣어준다.
const createStoreWithMiddleware = applyMiddleware(promissMiddleware, ReduxThunk)(createStore)


ReactDOM.render(
  <React.StrictMode>
    {/* redux를 쓰기위해 Provide태그와 태그 안에 store입력. */}
    <Provider 
      store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
