import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <div>
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          {/* Auth()는 hoc폴더안에 있는 auth.js 파일이다.*/}
          {/* Auth()안에 있는 null은 auth.js안에 있는 함수의 option 매게변수이다. */}
          {/* LandingPage는 아무나 들어갈 수 있기 때문에 option = null 이다. */}
          <Route path="/" element={Auth(LandingPage, null)} />

          {/* LoginPage는 로그인한 유저는 출입이 불가능해야하기 때문에 option = false 이다. */}
          <Route path="/login" element={Auth(LoginPage, false)} />
          {/* RegisterPage(회원가입)는 로그인한 유저는 출입이 불가능해야하기 때문에 option = false 이다. */}
          <Route path="/register" element={Auth(RegisterPage, false)} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
