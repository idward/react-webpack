import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

const AuthExample = ()=>(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/public'>Public Page</Link>
                </li>
                <li>
                    <Link to='/protected'>Protected Page</Link>
                </li>
            </ul>

            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>
);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb,100); //fake async
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb,100);
    }
};

const AuthButton = withRouter(({history})=>(
    fakeAuth.isAuthenticated ?
        <p>
            Welcome! <button onClick={()=>{
                fakeAuth.signout(()=>history.push('/'))
        }}>Sign out</button>
        </p>
     :
        <p>You are not logged in.</p>

));

const PrivateRoute = ({component:Component,...rest })=>(
  <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
          <Component {...props}/>
      ):(
          <Redirect to={{
              pathname:'/login',
              state:{from:props.location}
          }} />
      )
  )}/>
);

const Public = ()=> (
    <h3>Public</h3>
);

const Protected = ()=> (
    <h3>Protected</h3>
);

class Login extends React.Component {
    state = {

    }
}

export default AuthExample;
