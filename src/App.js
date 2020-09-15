import React, { useState } from 'react';
import './App.css';
import Home from './header/Home';
import Board from './header/Board';
import User from './header/User';
import AuthRoute from './AuthRoute';
import LogoutButton from './LogoutButton';
import LoginForm from './header/LoginForm';
import CreateUserForm from './header/CreateUserForm';
import CreateBoard from './header/CreateBoard';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null)
  const authenticated = user != null
  const logout = () => setUser(null)
  
  return (
    <div className="body">
      <Router>
        <div className="nav">
          <Link to="/"><button className="btnHome">Home</button></Link>
          <div className="users">
            {/*board/:id */}
            <Link to="/User"><button className="btnUser">회원정보</button></Link>
            <Link to="/CreateUserForm"><button className="btnCreateUser">회원가입</button></Link>
            <Link to="/CreateBoard"><button className="btnCreateUser">게시글 작성</button></Link>
            {authenticated ? (
              <LogoutButton logout={logout} />
            ) : (
                <Link to="/login">
                  <button className="btnLogin">로그인</button>
                </Link>
              )}
          </div>
        </div>
        <Route exact path='/' component={Home} />
        <main>
          <Switch>
            <Route exact path="/User" component={User} />
            <Route
              path="/login"
              render={porps => <LoginForm/>}
            />
            <Route path='/board/:id/:title' component={Board} />
            <AuthRoute
              authenticated={authenticated}
              path="/User"
              render={props => <User id={user}{...props} />}
            />
            <AuthRoute
              path="/User"
            />
            <Route path='/CreateUserForm'
              render={props => (<CreateUserForm {...props} />
              )} />
              <Route path='/CreateBoard' component={CreateBoard}/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
