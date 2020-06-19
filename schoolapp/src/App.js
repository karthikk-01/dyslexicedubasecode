import React, {Component} from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import LoginComponent from './containers/login';
import DashboardComponent from './containers/dashboard';
import Header from './containers/layout/header'
import Footer from './containers/layout/footer'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userDetails: null,
      isLoginSucess: false
    }
  }

  updateUserDetails= (userDetails, isLoginSucess) => {
    console.log("User Details===== > " , isLoginSucess)
    this.setState({userDetails, isLoginSucess});
  }
  

  render() {
    const { userDetails, isLoginSucess} = this.state;
    console.log(isLoginSucess)

    return (
      <div className="App">
        <Header userDetails={userDetails} />
        <main role="main">
          <Switch>

            { isLoginSucess &&
              <Route exact path="/dashboard" 
                render={props =>  <DashboardComponent {...props} updateUserDetails={this.updateUserDetails} />}
              />
          }

              <Route exact path="/" 
                render={props => <LoginComponent {...props} updateUserDetails={this.updateUserDetails} />}
              />
              <Route  render={props => <LoginComponent {...props} updateUserDetails={this.updateUserDetails} />}
              />

              
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
 
}

export default App; 
